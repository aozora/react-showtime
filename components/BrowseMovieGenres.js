import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectConfigurationMovieGenres } from '@/store/features/tmdb/configuration/configuration-slice';
import { cardType } from '@/lib/shared';
import MediumImage from '@/components/MediumImage';
import gsap from 'gsap/dist/gsap';
import styles from './BrowseMovieGenres.module.scss';
import { useDiscoverMoviesByGenres, useTopRatedMovies } from '../hooks/moviesHooks';

const BrowserMovieGenres = () => {
  const maxGallery = 6;
  const genres = useSelector(selectConfigurationMovieGenres);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  // const { media, isLoading, isError } = useTopRatedMovies();
  // load the movies list with a specific genre
  const { media, isLoading, isError } = useDiscoverMoviesByGenres(
    selectedGenre ? selectedGenre.id : null
  );

  // if (genres) {
  //   const ids = genres.map(g => g.id);
  //   console.log(ids.join('|'));
  // }

  useEffect(() => {
    if (genres) {
      setSelectedGenre(genres[0]);
    }
  }, [genres]);

  const selectGenre = useCallback((genre, index) => {
    setSelectedGenre(genre);
  }, []);

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
            genres.map((genre, index) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label
                key={genre.id}
                type="button"
                className={styles.menuItem}
                onChange={() => selectGenre(genre, index)}
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
