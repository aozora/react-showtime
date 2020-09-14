import React from 'react';
import { useSelector } from 'react-redux';
import CircularScore from '@/components/CircularScore';
import MediumMediaList from '@/components/MediumMediaList';
import ImdbLink from '@/components/ImdbLink';
import ScrollablePeopleList from '@/components/ScrollablePeopleList';
import { AnimatePresence } from 'framer-motion';
import { cardType, formatDate, tvCategory } from '../lib/shared';
import MediumImage from './MediumImage';
import { useMovieCredits, useMovieDetails } from '../hooks/moviesHooks';
import Person from './Person';
import styles from './MediumDetails.module.scss';
import { selectConfigurationLanguages } from '../store/features/tmdb/configuration/configuration-slice';

const MovieDetails = ({ slug }) => {
  const { medium, isLoading, isError } = useMovieDetails(slug);
  const { credits, isCreditsLoading, isCreditsError } = useMovieCredits(slug);
  const languages = useSelector(selectConfigurationLanguages);

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  const getLanguage = () => {
    if (!medium) {
      return '-';
    }

    const lang = languages.find(lang => lang.iso_639_1 === medium.original_language);

    if (lang) {
      return lang.english_name;
    }

    return '-';
  };

  const getRuntime = () => {
    if (!medium) {
      return '';
    }

    const { runtime } = medium;

    return `${parseInt(runtime / 60, 10)}h ${runtime - 60 * parseInt(runtime / 60, 10)}min`;
  };

  return (
    <article className={styles.mediumDetails}>
      <header>
        <div className={styles.mediumDetailsHeader}>
          <h1>{medium.original_title}</h1>

          {medium.original_title !== medium.title && <h2>{medium.title}</h2>}

          <p className={styles.mediumGenres}>
            {medium.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
          <p className={styles.mediumReleased}>Released {formatDate(medium.release_date)}</p>
        </div>

        <MediumImage medium={medium} imageType={cardType.backdrop} />

        <aside className={styles.mediumScore}>
          <CircularScore score={medium.vote_average * 10} />
          {!medium.vote_count && <p>User score</p>}
          {medium.vote_count && <p>From {medium.vote_count} users</p>}
        </aside>

        {medium.imdb_id && (
          <aside className={styles.mediumImdb}>
            <ImdbLink imdbId={medium.imdb_id} />
          </aside>
        )}
      </header>

      <section className={styles.mediumDetailsDetails}>
        <aside className={styles.mediumPoster}>
          <h2>Poster</h2>
          <MediumImage medium={medium} imageType={cardType.poster} />
        </aside>

        <div className={styles.mediumStoryline}>
          <h2>Storyline</h2>
          <p>{medium.overview}</p>

          <h2>Details</h2>
          <dl>
            {medium.homepage && (
              <>
                <dt>Official Website</dt>
                <dd>
                  <a href={medium.homepage} rel="noopener noreferrer">
                    {medium.homepage}
                  </a>
                </dd>
              </>
            )}

            <dt>Original language</dt>
            <dd>{getLanguage()}</dd>
            <dt>Runtime</dt>
            <dd>{getRuntime()}</dd>
            <dt>Budget</dt>
            <dd>{medium.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</dd>
            <dt>Revenue</dt>
            <dd>
              {medium.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </dd>
          </dl>
        </div>
      </section>

      <section>
        <h2>Cast</h2>
        {isCreditsLoading && <div>Loading...</div>}
        {credits && (
          <AnimatePresence>
            <ScrollablePeopleList people={credits.cast} />
          </AnimatePresence>
        )}
      </section>

      <section>
        <h2>Crew</h2>
        {isCreditsLoading && <div>Loading...</div>}
        {credits && (
          <AnimatePresence>
            <ScrollablePeopleList people={credits.crew} />
          </AnimatePresence>
        )}
      </section>

      <MediumMediaList medium={medium} />
    </article>
  );
};

export default MovieDetails;
