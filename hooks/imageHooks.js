import { useSelector } from 'react-redux';
import {
  selectConfigurationImagesBackdropSizes,
  selectConfigurationImagesSecureBaseUrl
} from '@/store/features/tmdb/configuration/configuration-slice';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useBackdropImage = medium => {
  const backdropSizesList = useSelector(selectConfigurationImagesBackdropSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);
  const backdropSizes = backdropSizesList.filter(size => size !== 'original');
  // const cardPlaceholder = '/img/card-backdrop-placeholder-broken.svg';
  const [src, setSrc] = useState();
  const [sizes, setSizes] = useState();
  const [srcSet, setSrcSet] = useState();

  useEffect(() => {
    if (medium) {
      // src
      const srcSize = backdropSizes[backdropSizes.length - 1];
      setSrc(`${imagesSecureBaseUrl}${srcSize}${medium.backdrop_path}`);

      // size
      const maxSize = backdropSizes[backdropSizes.length - 1];
      setSizes(`(max-width: ${maxSize}px) 100vw, ${maxSize}px`);

      // srcSet
      setSrcSet(
        backdropSizes
          .map(
            size => `${imagesSecureBaseUrl}${size}${medium.backdrop_path} ${size.replace('w', '')}w`
          )
          .join(',')
      );
    }
  }, [medium, backdropSizes, imagesSecureBaseUrl]);

  return {
    src,
    sizes,
    srcSet
  };
};
