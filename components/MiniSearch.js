import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useOverlayTrigger, useOverlayPosition, OverlayContainer } from '@react-aria/overlays';
import Link from 'next/link';
import MediumImage from '@/components/MediumImage';
import { cardType } from '@/lib/shared';
import MiniSearchResults from './MiniSearchResults';
import { useMultiSearch } from '../hooks/searchHooks';
import styles from './MiniSearch.module.scss';
import SearchField from './SearchField';

const MiniSearch = props => {
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [keyword, setKeyword] = useState();
  const { media, isLoading, isError } = useMultiSearch(keyword);

  // overlay
  const state = useOverlayTriggerState({});
  const triggerRef = React.useRef();
  const overlayRef = React.useRef();

  // Get props for the trigger and overlay. This also handles
  // hiding the overlay when a parent element of the trigger scrolls
  // (which invalidates the popover positioning).
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);
  // Get popover positioning props relative to the trigger
  const { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement: 'top',
    offset: 5,
    isOpen: state.isOpen
  });

  // // useButton ensures that focus management is handled correctly,
  // // across all browsers. Focus is restored to the button once the
  // // popover closes.
  // const { buttonProps } = useButton({
  //   onPress: () => state.open()
  // });

  const onSubmit = value => {
    // console.log('VALUE', value);
    setKeyword(value);
  };

  const getHrefByMediaType = type => {
    switch (type) {
      case 'movie':
        return '/movie/[slug]';
      case 'tv':
        return '/tv/[slug]';
      case 'person':
        return '/people/[slug]';
      default:
        return '';
    }
  };

  const generateMediumImageUrlByMediaType = result => {
    let path;
    switch (result.media_type) {
      case 'movie':
      case 'tv':
        path = result.poster_path || result.backdrop_path;
        break;
      case 'person':
        path = result.profile_path;
        break;
      default:
        path = '';
        break;
    }

    // return a fake medium object
    return {
      poster_path: path
    };
  };

  useEffect(() => {
    if (media) {
      state.open();
    }
  }, [media]);

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
            <SearchField onSubmit={onSubmit} placeholder="Search..." ariaLabel="Search" />
          </motion.div>
        )}
      </AnimatePresence>

      {state.isOpen && (
        <OverlayContainer>
          <MiniSearchResults
            {...overlayProps}
            {...positionProps}
            ref={overlayRef}
            isOpen={state.isOpen}
            onClose={state.close}
          >
            <p>Found ({media.results.length}) results.</p>
            <ul>
              {media.results.map(result => (
                <li key={result.id}>
                  <Link
                    href={getHrefByMediaType(result.media_type)}
                    as={getHrefByMediaType(result.media_type).replace('[slug]', result.id)}
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <MediumImage
                        medium={generateMediumImageUrlByMediaType(result)}
                        imageType={cardType.poster}
                      />
                      <span>
                        {result.title || result.name} ({result.media_type})
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </MiniSearchResults>
        </OverlayContainer>
      )}

      {/* <AnimatePresence> */}
      {/*  {media && ( */}
      {/*    <div className={styles.miniSearchResults}> */}
      {/*      <p>Found ({media.results.length}) results.</p> */}
      {/*      <ul> */}
      {/*        {media.results.map(result => ( */}
      {/*          <li> */}
      {/*            {result.title || result.name} ({result.media_type}) */}
      {/*          </li> */}
      {/*        ))} */}
      {/*      </ul> */}
      {/*    </div> */}
      {/*  )} */}
      {/* </AnimatePresence> */}

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
