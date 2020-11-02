import { useSelector } from 'react-redux';
import {
  selectConfigurationImagesBackdropSizes,
  selectConfigurationImagesPosterSizes,
  selectConfigurationImagesSecureBaseUrl
} from '@/store/features/tmdb/configuration/configuration-slice';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useMediumImage = medium => {
  const backdropSizesList = useSelector(selectConfigurationImagesBackdropSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);
  const backdropSizes = backdropSizesList.filter(size => size !== 'original');
  const posterSizesList = useSelector(selectConfigurationImagesPosterSizes);
  const posterSizes = posterSizesList.filter(size => size !== 'original');

  const [poster, setPoster] = useState(null);
  const [backdrop, setBackdrop] = useState(null);

  useEffect(() => {
    if (medium) {
      const posterTemp = {};
      const backdropTemp = {};

      // src
      const backdropMaxSize = backdropSizes[backdropSizes.length - 1];
      const posterMaxSize = posterSizes[posterSizes.length - 1];
      backdropTemp.src = `${imagesSecureBaseUrl}${backdropMaxSize}${medium.backdrop_path}`;
      posterTemp.src = `${imagesSecureBaseUrl}${posterMaxSize}${medium.poster_path}`;

      // size
      backdropTemp.sizes = `(max-width: ${backdropMaxSize}px) 100vw, ${backdropMaxSize}px`;
      posterTemp.sizes = `(max-width: ${posterMaxSize}px) 100vw, ${posterMaxSize}px`;

      // srcSet
      backdropTemp.srcSet = backdropSizes
        .map(
          size => `${imagesSecureBaseUrl}${size}${medium.backdrop_path} ${size.replace('w', '')}w`
        )
        .join(',');
      posterTemp.srcSet = posterSizes
        .map(size => `${imagesSecureBaseUrl}${size}${medium.poster_path} ${size.replace('w', '')}w`)
        .join(',');

      setBackdrop(backdropTemp);
      setPoster(posterTemp);
    }
  }, [medium, backdropSizes, posterSizes, imagesSecureBaseUrl]);

  return {
    poster,
    backdrop
  };
};
