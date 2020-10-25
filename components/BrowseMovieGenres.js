import React from 'react';
import { useSelector } from 'react-redux';
import { selectConfigurationMovieGenres } from '@/store/features/tmdb/configuration/configuration-slice';
import { cardType } from '@/lib/shared';
import MediumImage from '@/components/MediumImage';
import styles from './BrowseMovieGenres.module.scss';
import { useTopRatedMovies } from '../hooks/moviesHooks';

const BrowserMovieGenres = () => {
  const genres = useSelector(selectConfigurationMovieGenres);
  const { media, isLoading, isError } = useTopRatedMovies();

  return (
    <section className={styles.fullGridMenu}>
      <div className={styles.galleryWrapper}>
        <div className={styles.gallery}>
          {media &&
            media.results.map(medium => (
              <MediumImage
                className={styles.galleryItem}
                key={medium.id}
                medium={{ poster_path: medium.poster_path }}
                imageType={cardType.poster}
              />
            ))}
        </div>
      </div>

      <nav className={styles.menu}>
        <span className={styles.menuHeadline}>Choose a genre</span>
        {genres &&
          genres.map(genre => (
            <a className={styles.menuItem} href="#" key={genre.id}>
              <span className={styles.menuItemTitle}>{genre.name}</span>
            </a>
          ))}
      </nav>
    </section>
  );
};

export default BrowserMovieGenres;
