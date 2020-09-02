import React from 'react';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';

const SearchField = props => {
  const { label, ariaLabel } = props;
  const state = useSearchFieldState(props);
  const ref = React.useRef();
  const { labelProps, inputProps, clearButtonProps } = useSearchField(props, state, ref);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      {label && <label {...labelProps}>{label}</label>}
      <input {...inputProps} ref={ref} aria-label={ariaLabel} />
      {state.value !== '' && (
        <button type="button" {...clearButtonProps}>
          x
        </button>
      )}
    </>
  );
};

export default SearchField;
