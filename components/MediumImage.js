import React from 'react';
import { useSelector } from 'react-redux';
import { SimpleImg } from 'react-simple-img';
import {
  selectConfigurationImagesBackdropSizes,
  selectConfigurationImagesPosterSizes,
  selectConfigurationImagesProfileSizes,
  selectConfigurationImagesSecureBaseUrl
} from '../store/features/tmdb/configuration/configuration-slice';
import { cardType } from '../lib/shared';

/**
 * MediumImage - render a medium responsive image lazily
 * @param medium A Medium object
 * @param imageType The type of the image, can be "poster" or "backdrop"
 * @returns {JSX.Element}
 * @constructor
 */
const MediumImage = ({ medium, imageType }) => {
  const backdropSizesList = useSelector(selectConfigurationImagesBackdropSizes);
  const posterSizesList = useSelector(selectConfigurationImagesPosterSizes);
  const profileSizesList = useSelector(selectConfigurationImagesProfileSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);

  const backdropSizes = () => {
    return backdropSizesList.filter(size => size !== 'original');
  };
  const posterSizes = () => {
    return posterSizesList.filter(size => size !== 'original');
  };
  const profileSizes = () => {
    return profileSizesList.filter(size => size !== 'original');
  };

  const getImagePath = (filePath, size) => {
    const baseUrl = imagesSecureBaseUrl;
    return `${baseUrl}${size}${filePath}`;
  };

  const backdropMaxPath = () => {
    const filePath = medium.backdrop_path;
    const size = backdropSizes()[backdropSizes().length - 1];

    return getImagePath(filePath, size);
  };

  const posterMaxPath = () => {
    const filePath = medium.poster_path;
    const size = posterSizes()[posterSizes().length - 1];

    return getImagePath(filePath, size);
  };

  const movieMaxPicturePath = () => {
    return imageType === cardType.poster ? posterMaxPath() : backdropMaxPath();
  };

  const movieMaxPictureSize = () => {
    const maxSize =
      imageType === cardType.poster
        ? posterSizes()[posterSizes().length - 1]
        : backdropSizes()[backdropSizes().length - 1];

    return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
  };

  const pictureResponsivePath = () => {
    const filePath = imageType === cardType.poster ? medium.poster_path : medium.backdrop_path;
    const sizes = imageType === cardType.poster ? posterSizes() : backdropSizes();
    // console.log({ sizes });
    return sizes.map(size => `${getImagePath(filePath, size)} ${size.replace('w', '')}w`).join(',');
  };

  const getPlaceholder = () => {
    return imageType === cardType.poster
      ? '/img/card-poster-placeholder-broken.svg'
      : '/img/card-backdrop-placeholder-broken.svg';
  };

  return (
    <figure>
      {medium && (
        <SimpleImg
          sizes={movieMaxPictureSize()}
          srcSet={pictureResponsivePath()}
          src={movieMaxPicturePath}
          // placeholder={getPlaceholder()}
          placeholder={false}
          alt=""
        />
      )}

      {!medium && <img src={getPlaceholder()} alt="" />}

      <figcaption>{medium.title}</figcaption>
    </figure>
  );
};

export default MediumImage;
