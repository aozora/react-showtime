import { SimpleImg } from 'react-simple-img';
import React from 'react';
import { cardType } from '../lib/shared';

/**
 * MediumImage - render a medium responsive image lazily
 * @param medium A Medium object
 * @param imageType The type of the image, can be "poster" or "backdrop"
 * @returns {JSX.Element}
 * @constructor
 */
const MediumImage = ({ medium, imageType }) => {
  const backdropSizes = () => {
    return this.$store.state.api.configuration.images.backdrop_sizes.filter(
      size => size !== 'original'
    );
  };
  const posterSizes = () => {
    return this.$store.state.api.configuration.images.poster_sizes.filter(
      size => size !== 'original'
    );
  };
  const profileSizes = () => {
    return this.$store.state.api.configuration.images.profile_sizes.filter(
      size => size !== 'original'
    );
  };

  const getImagePath = (filePath, size) => {
    const baseUrl = this.$store.state.api.configuration.images.secure_base_url;
    return `${baseUrl}${size}${filePath}`;
  };

  const backdropMaxPath = () => {
    const filePath = this.medium.backdrop_path;
    const size = backdropSizes()[this.backdropSizes.length - 1];

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
        ? posterSizes()[posterSizes.length - 1]
        : backdropSizes()[backdropSizes().length - 1];

    return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
  };

  const pictureResponsivePath = () => {
    const filePath =
      imageType === cardType.poster ? this.medium.poster_path : this.medium.backdrop_path;
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
          placeholder={getPlaceholder()}
          alt=""
        />
      )}

      {!medium && <img src={getPlaceholder()} alt="" />}

      <figcaption>{medium.title}</figcaption>
    </figure>
  );
};

export default MediumImage;
