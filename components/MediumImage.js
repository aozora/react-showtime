import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { SimpleImg } from 'react-simple-img';
import {
  selectConfigurationImagesBackdropSizes,
  selectConfigurationImagesPosterSizes,
  selectConfigurationImagesSecureBaseUrl
} from '@/store/features/tmdb/configuration/configuration-slice';
import { cardType } from '@/lib/shared';

/**
 * MediumImage - render a medium responsive image lazily
 * @param medium A Medium object
 * @param imageType The type of the image, can be "poster" or "backdrop"
 * @returns {JSX.Element}
 * @constructor
 */
const MediumImage = ({ medium, imageType, className }) => {
  const backdropSizesList = useSelector(selectConfigurationImagesBackdropSizes);
  const posterSizesList = useSelector(selectConfigurationImagesPosterSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);
  const backdropSizes = backdropSizesList.filter(size => size !== 'original');
  const posterSizes = posterSizesList.filter(size => size !== 'original');
  const cardPlaceholder =
    imageType === cardType.poster
      ? '/img/card-poster-placeholder-broken.svg'
      : '/img/card-backdrop-placeholder-broken.svg';

  const getImagePath = useCallback(
    (filePath, size) => {
      return `${imagesSecureBaseUrl}${size}${filePath}`;
    },
    [imagesSecureBaseUrl]
  );

  const backdropMaxPath = useMemo(() => {
    const filePath = medium.backdrop_path;
    const size = backdropSizes[backdropSizes.length - 1];

    return getImagePath(filePath, size);
  }, [medium, backdropSizes, getImagePath]);

  const posterMaxPath = useMemo(() => {
    const filePath = medium.poster_path;
    const size = posterSizes[posterSizes.length - 1];

    return getImagePath(filePath, size);
  }, [medium, posterSizes, getImagePath]);

  const getSrc = useMemo(() => {
    return imageType === cardType.poster ? posterMaxPath : backdropMaxPath;
  }, [imageType, posterMaxPath, backdropMaxPath]);

  const getSizes = useMemo(() => {
    const maxSize =
      imageType === cardType.poster
        ? posterSizes[posterSizes.length - 1]
        : backdropSizes[backdropSizes.length - 1];

    return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
  }, [posterSizes, backdropSizes, imageType]);

  const getSrcSet = useMemo(() => {
    const filePath = imageType === cardType.poster ? medium.poster_path : medium.backdrop_path;
    const sizes = imageType === cardType.poster ? posterSizes : backdropSizes;
    return sizes.map(size => `${getImagePath(filePath, size)} ${size.replace('w', '')}w`).join(',');
  }, [imageType, posterSizes, backdropSizes, getImagePath, medium]);

  const isMediumValid = useMemo(() => {
    if (!medium) {
      return false;
    }

    const filePath = imageType === cardType.poster ? medium.poster_path : medium.backdrop_path;
    return !(medium && !filePath);
  }, [medium, imageType]);

  return (
    <figure className={className}>
      {isMediumValid && (
        <SimpleImg
          sizes={getSizes}
          srcSet={getSrcSet}
          src={getSrc}
          // placeholder={getPlaceholder()}
          placeholder={false}
          alt=""
        />
      )}

      {!isMediumValid && <img src={cardPlaceholder} alt="" />}

      {medium.title && <figcaption>{medium.title}</figcaption>}
    </figure>
  );
};

export default MediumImage;
