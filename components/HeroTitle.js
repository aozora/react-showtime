/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/components/HeroMedium.module.scss';
import { letterContainerVariants, letterVariants } from '@/lib/motionShared';

// eslint-disable-next-line react/display-name,no-unused-vars
const HeroTitle = React.forwardRef((props, ref) => {
  const { title } = props;

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a>{title}</a>;

  return (
    <motion.a
      initial="before"
      animate="after"
      variants={letterContainerVariants}
      className={styles.splitting}
      data-splitting
      aria-label={title}
    >
      {title.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className={styles.word}>
          {Array.from(word).map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              aria-hidden="true"
              className={styles.char}
              dangerouslySetInnerHTML={{ __html: char === ' ' ? '&nbsp;' : char }}
            />
          ))}
          &nbsp;
        </span>
      ))}
    </motion.a>
  );
});

export default HeroTitle;
