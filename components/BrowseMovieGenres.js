import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectConfigurationMovieGenres } from '@/store/features/tmdb/configuration/configuration-slice';
import { cardType } from '@/lib/shared';
import MediumImage from '@/components/MediumImage';
import styles from './BrowseMovieGenres.module.scss';
import { useDiscoverMoviesByGenres, useTopRatedMovies } from '../hooks/moviesHooks';

const BrowserMovieGenres = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const genres = useSelector(selectConfigurationMovieGenres);
  const { media, isLoading, isError } = useTopRatedMovies();
  // const { media, isLoading, isError } = useDiscoverMoviesByGenres(genres ? genres[0].id : null);

  useEffect(() => {
    if (genres) {
      setSelectedGenre(genres[0]);
    }
  }, [genres]);

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
        <form>
          <span className={styles.menuHeadline}>Choose a genre</span>
          {genres &&
            genres.map(genre => (
              <label
                key={genre.id}
                type="button"
                className={styles.menuItem}
                // onClick={setSelectedGenre(genre)}
              >
                <input type="radio" name="genre" value={genre.id} />
                <span className={styles.menuItemTitle}>{genre.name}</span>
              </label>
            ))}
        </form>
      </nav>
    </section>
  );
};

export default BrowserMovieGenres;
