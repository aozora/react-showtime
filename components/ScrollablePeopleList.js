/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ScrollablePeopleList.module.scss';
import Person from './Person';

const ScrollablePeopleList = ({ people, motionKey }) => {
  return (
    <motion.div
      className={`${styles.peopleList} ${styles.peopleListScrollable}`}
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.peopleListContainer}`}>
        {people &&
          people.map(person => (
            <article key={person.id}>
              <Person person={person} />
            </article>
          ))}
      </div>
    </motion.div>
  );
};

export default ScrollablePeopleList;
