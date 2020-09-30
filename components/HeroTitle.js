/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/components/HeroMedium.module.scss';
import { letterContainerVariants, letterVariants } from '@/lib/motionShared';

// eslint-disable-next-line react/display-name
const HeroTitle = React.forwardRef((props, ref) => {
  const { title } = props;

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
});

export default HeroTitle;
