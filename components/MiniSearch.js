import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchField from './SearchField';
import styles from './MiniSearch.module.scss';
import { useMultiSearch } from '../hooks/searchHooks';

const MiniSearch = props => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [keyword, setKeyword] = useState();
  const { media, isLoading, isError } = useMultiSearch(keyword);

  // useEffect(() => {
  //   if (media) {
  //
  //   }
  // }, [media]);

  const onSubmit = value => {
    // console.log('VALUE', value);
    setKeyword(value);
  };

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
            <SearchField onSubmit={onSubmit} placeholder="Search..." />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {media && (
          <div className={styles.miniSearchResults}>
            Found ({media.results.length}) results.
            <p />
            <ul>
              {media.results.map(result => (
                <li>
                  {result.title || result.name} ({result.media_type})
                </li>
              ))}
            </ul>
          </div>
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
