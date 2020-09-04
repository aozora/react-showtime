import React from 'react';
import { useSelector } from 'react-redux';
import { selectConfigurationImagesSecureBaseUrl } from '@/store/features/tmdb/configuration/configuration-slice';
import { useTvDetails, useTvSeasons } from '../hooks/tvHooks';
import styles from './TvSeasonDetails.module.scss';

const TvSeasonDetails = ({ slug, seasonNumber }) => {
  const { medium, isLoading, isError } = useTvDetails(slug);
  const { seasons, isSeasonsLoading, isSeasonsError } = useTvSeasons((slug, seasonNumber));
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);

  if (isError || isSeasonsError) {
    return <div>failed to load</div>;
  }

  if (isLoading || isSeasonsLoading) {
    return <div>loading...</div>;
  }

  return <article className={styles.seasons} />;
};

export default TvSeasonDetails;
