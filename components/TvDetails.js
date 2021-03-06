import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import ScrollablePeopleList from '@/components/ScrollablePeopleList';
import CircularScore from './CircularScore';
import MediumMediaList from './MediumMediaList';
import { cardType, formatDate } from '../lib/shared';
import MediumImage from './MediumImage';
import Person from './Person';
import styles from './MediumDetails.module.scss';
import {
  selectConfigurationImagesSecureBaseUrl,
  selectConfigurationLanguages
} from '../store/features/tmdb/configuration/configuration-slice';
import { useTvCredits, useTvDetails } from '../hooks/tvHooks';

const TvDetails = ({ slug }) => {
  const { medium, isLoading, isError } = useTvDetails(slug);
  const { credits, isCreditsLoading, isCreditsError } = useTvCredits(slug);
  const languages = useSelector(selectConfigurationLanguages);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);

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

    const runtime = medium.episode_run_time;

    return `${parseInt(runtime / 60, 10)}h ${runtime - 60 * parseInt(runtime / 60, 10)}min`;
  };

  return (
    <article className={`${styles.mediumDetails} full-bleed wrapper`}>
      <header className="full-bleed">
        <div className={styles.mediumDetailsHeader}>
          <h1>{medium.original_name}</h1>

          {medium.original_name !== medium.name && <h2>{medium.name}</h2>}

          <p className={styles.mediumGenres}>
            {medium.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>

          <p className={styles.mediumReleased}>First Aired {formatDate(medium.first_air_date)}</p>
          <p className={styles.mediumReleased}>Last Aired {formatDate(medium.last_air_date)}</p>
          <p className={styles.mediumSeasonsEpisodesInfo}>
            {medium.number_of_seasons}&nbsp;
            {medium.number_of_seasons === 1 ? 'Season' : 'Seasons'}, {medium.number_of_episodes}{' '}
            episodes
          </p>
        </div>

        <MediumImage medium={medium} imageType={cardType.backdrop} />

        <aside className={styles.mediumScore}>
          <CircularScore score={medium.vote_average * 10} />
          {!medium.vote_count && <p>User score</p>}
          {medium.vote_count && <p>From {medium.vote_count} users</p>}
        </aside>

        {medium.imdb_id && (
          <aside className={styles.mediumImdb}>
            <a
              className="button button--icon button--imdb"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/${medium.imdb_id}/`}
            >
              View on
              <span className="button__icon" aria-hidden="true">
                <svg width="68" height="34" viewBox="0 0 68 34" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path className="imdb-box" d="M0 0h68v34H0z" />
                    <path
                      className="imdb-text"
                      fillRule="nonzero"
                      d="M25.078 15.844c.15-.674.187-1.311.3-1.986.074-.525.112-1.012.187-1.537.075-.487.15-.974.187-1.461.037-.375.075-.75.15-1.124.037-.413.075-.787.15-1.2.074-.374.112-.786.15-1.161.037-.338 0-.338.336-.338h5.729c.187 0 .224.038.224.225V25.7c0 .15-.037.225-.187.225H28.71c-.187 0-.225-.037-.225-.225V15.657h-.037c-.15.787-.262 1.536-.412 2.323-.112.675-.262 1.387-.375 2.061-.112.675-.224 1.387-.337 2.062-.112.6-.224 1.199-.299 1.798-.112.637-.225 1.237-.337 1.874-.037.15-.075.188-.225.188h-2.546c-.075 0-.15 0-.15-.113-.15-.974-.336-1.949-.524-2.923-.187-1.012-.374-1.986-.561-2.998-.187-1.05-.337-2.099-.562-3.148-.075-.375-.112-.75-.225-1.162v10.119c0 .187-.037.262-.224.262H18c-.187 0-.224-.037-.224-.225V7.337c0-.15.037-.225.187-.225h5.28c.112 0 .187 0 .224.15.112.787.262 1.574.412 2.361.15.862.3 1.687.45 2.549.111.712.224 1.386.336 2.098.225.487.337 1.05.412 1.574zm9.81.487V7.262c0-.225.075-.262.262-.262h6.028c.861 0 1.722.037 2.546.375.674.3 1.348.637 1.797 1.274.3.412.45.9.562 1.424.112.637.075 1.237.075 1.874v10.118c0 .9-.3 1.724-1.011 2.324-.487.412-1.086.674-1.685.824a9.693 9.693 0 0 1-2.546.337c-1.947.075-3.857 0-5.804.038-.187 0-.15-.113-.15-.225-.074-2.96-.074-5.996-.074-9.032zm4.418-.15v6.146c0 .15.037.188.187.188.3 0 .562 0 .861-.038.45-.112.786-.337.786-.937V10.748c0-.338-.15-.525-.411-.675-.375-.187-.787-.15-1.199-.187-.187 0-.224.037-.224.224v6.071zm13.74-4.909c.712-.487 1.461-.937 2.285-1.162 1.048-.262 1.947-.037 2.77.638.6.487.899 1.124.899 1.91V23.79c0 1.05-.824 1.724-1.61 1.874-.562.112-1.123.112-1.685.075-.561-.038-1.086-.225-1.61-.413-.412-.15-.861-.3-1.31-.412-.187-.037-.262.038-.337.15-.113.225-.187.45-.225.675-.037.112-.075.15-.187.15h-3.707c-.112 0-.15-.038-.15-.113V7.3c0-.225.038-.263.262-.263h4.269c.262 0 .262 0 .262.3.075 1.274.075 2.586.075 3.935zm.3 6.296v4.91c0 .187.038.337.15.486.15.225.375.3.6.225.261-.075.336-.187.336-.524v-9.706c0-.15 0-.263-.037-.375-.113-.3-.3-.487-.637-.45-.224.038-.412.113-.412.525v4.909zm-42.309-1.124V7.262c0-.187.038-.225.225-.225h4.006c.188 0 .188.038.188.225V25.7c0 .188-.038.225-.225.225h-4.006c-.188 0-.225-.037-.225-.225.037-3.11.037-6.183.037-9.256z"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </aside>
        )}
      </header>

      <section className={styles.mediumDetailsDetails}>
        <aside className={styles.mediumPoster}>
          {/* <h2>Poster</h2> */}
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
            <dt>Episode Runtime</dt>
            <dd>{getRuntime()}</dd>
            <dt>Networks</dt>
            <dd>
              {medium.networks.map(network => (
                <img
                  key={network.name}
                  className={styles.networkLogo}
                  src={`${imagesSecureBaseUrl}w45${network.logo_path}`}
                  alt={network.name}
                />
              ))}
            </dd>

            <dt>Status</dt>
            <dd>{medium.status}</dd>
            <dt>Type</dt>
            <dd>{medium.type}</dd>
          </dl>
        </div>
      </section>

      <section className="full-bleed">
        <h2>Cast</h2>
        {isCreditsLoading && <div>Loading...</div>}
        {credits && (
          <AnimatePresence>
            <ScrollablePeopleList people={credits.cast} />
          </AnimatePresence>
        )}
      </section>

      <section className="full-bleed">
        <h2>Crew</h2>
        {isCreditsLoading && <div>Loading...</div>}
        {credits && (
          <AnimatePresence>
            <ScrollablePeopleList people={credits.crew} />
          </AnimatePresence>
        )}
      </section>

      <section>
        {medium.seasons && (
          <section className={styles.seasons}>
            <h2>Seasons</h2>
            {/* <p> */}
            {/*  <Link href="/season/[slug]" as="/season/[slug]"> */}
            {/*    <a /> */}
            {/*  </Link> */}
            {/* </p> */}
            <table>
              <tbody>
                {medium.seasons.map(season => (
                  <tr key={season.id}>
                    <td className={styles.seasonPosterCell}>
                      <MediumImage
                        medium={{ poster_path: season.poster_path }}
                        imageType={cardType.poster}
                      />
                    </td>
                    <td className={styles.seasonsDetailsCell}>
                      <h3>
                        {season.name} ({formatDate(season.air_date)}) | {season.episode_count}{' '}
                        episodes
                      </h3>
                      <p>{season.overview}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </section>

      <MediumMediaList medium={medium} />
    </article>
  );
};

export default TvDetails;
