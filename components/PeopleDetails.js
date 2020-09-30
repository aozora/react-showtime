import React, { useCallback } from 'react';
import { compareCastReleaseDatesDesc, formatDate } from '@/lib/shared';

import MediumMediaList from '@/components/MediumMediaList';
import styles from './MediumDetails.module.scss';
import { usePeopleCredits, usePeopleDetails } from '../hooks/peopleHooks';
import PersonImage from './PersonImage';

const PeopleDetails = ({ slug }) => {
  const { person, isLoading, isError } = usePeopleDetails(slug);
  const { credits, isCreditsLoading, isCreditsError } = usePeopleCredits(slug);

  const formatDateTime = useCallback(date => formatDate(date));

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <article className={`${styles.mediumDetails} ${styles.personDetails}`}>
      <header>
        <div className={styles.mediumDetailsHeader}>
          <h1>{person.name}</h1>
        </div>
      </header>

      <section className={styles.mediumDetailsDetails}>
        <aside className={styles.mediumPoster}>
          <PersonImage person={person} />
        </aside>

        <div className={styles.mediumStoryline}>
          <h2>Biography</h2>
          <p>{person.biography}</p>

          <h2>Personal Info</h2>
          <dl>
            <dt>Birthday</dt>
            <dd>{formatDateTime(person.birthday)}</dd>
            <dt>Place of birth</dt>
            <dd>{person.place_of_birth}</dd>
            {person.deathday && (
              <>
                <dt>Death</dt>
                <dd>{formatDateTime(person.deathday)}</dd>
              </>
            )}
            <dt>Also known as</dt>
            <dd>
              {person.also_known_as && person.also_known_as.map(name => <p key={name}>{name}</p>)}
            </dd>
          </dl>

          <h2>Acting</h2>
          {credits && (
            <table>
              <tbody>
                {credits.cast.sort(compareCastReleaseDatesDesc).map((cast, index) => (
                  <tr key={index}>
                    <td>{cast.release_date && formatDateTime(cast.release_date)}</td>
                    <td>
                      {cast.title}
                      {cast.original_title && <span>{`(${cast.original_title})`}</span>}
                      {cast.character && <>&nbsp;as {cast.character}</>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <MediumMediaList medium={person} />
    </article>
  );
};

export default PeopleDetails;
