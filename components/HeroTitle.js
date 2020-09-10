/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import styles from '@/components/HeroMedium.module.scss';
import React from 'react';
import { letterContainerVariants, letterVariants } from '@/lib/motionShared';

const HeroTitle = ({ title }) => {
  return (
    <motion.a
      initial="before"
      animate="after"
      variants={letterContainerVariants}
      className={styles.splitting}
      data-splitting
      aria-label={title}
    >
      {Array.from(title).map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          aria-hidden="true"
          className={styles.char}
          dangerouslySetInnerHTML={{ __html: char === ' ' ? '&nbsp;' : char }}
        />
      ))}
    </motion.a>
  );
};

export default HeroTitle;
