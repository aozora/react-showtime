import React from 'react';
import Link from 'next/link';
import { SimpleImg } from 'react-simple-img';
import { useSelector } from 'react-redux';
import { cardType, formatDate } from '../lib/shared';
// import styles from './MovieDetails.module.scss';
import {
  selectConfigurationImagesProfileSizes,
  selectConfigurationImagesSecureBaseUrl
} from '../store/features/tmdb/configuration/configuration-slice';

const Person = ({ person }) => {
  const profileSizesList = useSelector(selectConfigurationImagesProfileSizes);
  const imagesSecureBaseUrl = useSelector(selectConfigurationImagesSecureBaseUrl);

  const profileSizes = () => {
    return profileSizesList.filter(size => size !== 'original');
  };

  const getImagePath = (filePath, size) => {
    const baseUrl = imagesSecureBaseUrl;
    return `${baseUrl}${size}${filePath}`;
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
    <Link href={`/people/${person.id}`}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <SimpleImg
          sizes={personMaxPictureSize()}
          srcSet={personResponsivePath(person.profile_path)}
          src={personProfilePicturePath(person.profile_path)}
          // placeholder={getPlaceholder()}
          placeholder={false}
          alt=""
        />

        {/* <svg v-else class="avatar-placeholder"> */}
        {/*  <use xlink:href="#icon-avatar"></use> */}
        {/* </svg> */}
        <p>{person.character}</p>
        <p>{person.name}</p>
      </a>
    </Link>
  );
};

export default Person;
