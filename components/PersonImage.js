import React from 'react';
import { useSelector } from 'react-redux';
import { SimpleImg } from 'react-simple-img';
import {
  selectConfigurationImagesProfileSizes,
  selectConfigurationImagesSecureBaseUrl
} from '../store/features/tmdb/configuration/configuration-slice';

/**
 * PersonImage - render a person responsive image lazily
 * @param person A Medium object
 * @returns {JSX.Element}
 * @constructor
 */
const PersonImage = ({ person }) => {
  const profileSizesList = useSelector(selectConfigurationImagesProfileSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);

  const profileSizes = () => {
    return profileSizesList.filter(size => size !== 'original');
  };

  const getImagePath = (filePath, size) => {
    return `${imagesSecureBaseUrl}${size}${filePath}`;
  };

  const personMaxPictureSize = () => {
    const maxSize = profileSizes()[1];
    return `(max-width: ${maxSize}px) 100vw, ${maxSize}px`;
  };

  const personResponsivePath = profilePath => {
    const sizes = profileSizes();
    return sizes
      .map(size => `${getImagePath(profilePath, size)} ${size.replace('w', '')}w`)
      .join(',');
  };

  const personProfilePicturePath = profilePath => {
    const size = profileSizes()[1];
    return getImagePath(profilePath, size);
  };

  return (
    <figure>
      {person && person.profile_path && (
        <SimpleImg
          sizes={personMaxPictureSize()}
          srcSet={personResponsivePath(person.profile_path)}
          src={personProfilePicturePath(person.profile_path)}
          placeholder={false}
          alt=""
        />
      )}

      {(!person || !person.profile_path) && <img src="/img/avatar.svg" alt="" />}

      {/* <figcaption>{person.name}</figcaption> */}
    </figure>
  );
};

export default PersonImage;
