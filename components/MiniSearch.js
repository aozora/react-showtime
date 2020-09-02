import React, { useState } from 'react';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './MiniSearch.module.scss';

const MiniSearch = props => {
  const { label } = props;
  const state = useSearchFieldState(props);
  const ref = React.useRef();
  const { labelProps, inputProps, clearButtonProps } = useSearchField(props, state, ref);
  const [searchIsVisible, setSearchIsVisible] = useState(false);

  return (
    <form className={styles.miniSearch}>
      <AnimatePresence>
        {searchIsVisible && (
          <motion.div
            className={styles.searchField}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <input {...inputProps} ref={ref} />
            {state.value !== '' && (
              <button type="button" {...clearButtonProps}>
                x
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button type="button" onClick={() => setSearchIsVisible(!searchIsVisible)}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9.516 14.016c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5-4.5 2.016-4.5 4.5 2.016 4.5 4.5 4.5zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281c-1.125 0.984-2.625 1.547-4.219 1.547-3.609 0-6.516-2.859-6.516-6.469s2.906-6.516 6.516-6.516 6.469 2.906 6.469 6.516c0 1.594-0.563 3.094-1.547 4.219l0.281 0.281h0.797z"
          />
        </svg>
      </button>
    </form>
  );
};

export default MiniSearch;
