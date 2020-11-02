import React, { useMemo, useCallback, forwardRef } from 'react';
import { useSelector } from 'react-redux';
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
 * @param className
 * @returns {JSX.Element}
 * @constructor
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly medium?: *, readonly imageType?: *, readonly className?: *}> & React.RefAttributes<unknown>>}
 */
// eslint-disable-next-line react/display-name
const MediumImage = forwardRef(({ medium, imageType, className }, ref) => {
  const backdropSizesList = useSelector(selectConfigurationImagesBackdropSizes);
  const posterSizesList = useSelector(selectConfigurationImagesPosterSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);
  const backdropSizes = backdropSizesList.filter(size => size !== 'original');
  const posterSizes = posterSizesList.filter(size => size !== 'original');
  const cardPlaceholder =
    imageType === cardType.poster
      ? '/img/card-poster-placeholder-broken.svg'
      : '/img/card-backdrop-placeholder-broken.svg';

  // const { poster, backdrop } = useMediumImage(medium);

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

  const mediumHasImage = useMemo(() => {
    if (!medium) {
      return false;
    }

    // if (imageType === cardType.poster && !poster) {
    //   return false;
    // }
    //
    // if (imageType === cardType.backdrop && !backdrop) {
    //   return false;
    // }

    const filePath = imageType === cardType.poster ? medium.poster_path : medium.backdrop_path;
    return !(medium && !filePath);
  }, [medium, imageType]);

  return (
    <figure className={className}>
      {
        mediumHasImage && (
          <img alt="" ref={ref} loading="lazy" sizes={getSizes} srcSet={getSrcSet} src={getSrc} />
        )
        /* (imageType === cardType.poster && poster ? (
          <img
            alt=""
            ref={ref}
            loading="lazy"
            sizes={poster.sizes}
            srcSet={poster.srcSet}
            src={poster.src}
          />
        ) : (
          <img
            alt=""
            ref={ref}
            loading="lazy"
            sizes={backdrop.sizes}
            srcSet={backdrop.srcSet}
            src={backdrop.src}
          />
        )) */
      }

      {!mediumHasImage && <img src={cardPlaceholder} alt="" />}

      {medium.title && <figcaption>{medium.title}</figcaption>}
    </figure>
  );
});

export default MediumImage;
