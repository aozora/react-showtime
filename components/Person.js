import React from 'react';
import Link from 'next/link';
import PersonImage from './PersonImage';

const Person = ({ person }) => {
  return (
    <Link href={person ? `/people/${person.id}` : '#'}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <PersonImage person={person} />
        {/* <svg v-else class="avatar-placeholder"> */}
        {/*  <use xlink:href="#icon-avatar"></use> */}
        {/* </svg> */}
        {person && (
          <div>
            <p>{person.character || person.job}</p>
            <p>{person.name}</p>
          </div>
        )}
      </a>
    </Link>
  );
};

export default Person;
