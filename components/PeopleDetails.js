import React from 'react';
import { compareCastReleaseDatesDesc } from '@/lib/shared';
import { formatDate } from '../lib/shared';
import styles from './MediumDetails.module.scss';
import { usePeopleCredits, usePeopleDetails } from '../hooks/peopleHooks';
import PersonImage from './PersonImage';

const PeopleDetails = ({ slug }) => {
  const { person, isLoading, isError } = usePeopleDetails(slug);
  const { credits, isCreditsLoading, isCreditsError } = usePeopleCredits(slug);

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
            <dd>{formatDate(person.birthday)}</dd>
            <dt>Place of birth</dt>
            <dd>{person.place_of_birth}</dd>
            {person.deathday && (
              <>
                <dt>Death</dt>
                <dd>{formatDate(person.deathday)}</dd>
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
                    <td>{cast.release_date && formatDate(cast.release_date)}</td>
                    <td>
                      {cast.title}
                      {cast.original_title && <span>{`(${cast.original_title})`}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </article>
  );
};

export default PeopleDetails;
