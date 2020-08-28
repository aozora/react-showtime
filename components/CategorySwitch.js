/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useRadioGroup, useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useFocusRing } from '@react-aria/focus';
import { useRadioGroupState } from '@react-stately/radio';
import styles from './CategorySwitch.module.scss';

const RadioContext = React.createContext();

export const CategorySwitch = props => {
  const { children, label, onChange } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  useEffect(() => {
    onChange(state.selectedValue);
  }, [state.selectedValue]);

  return (
    <div {...radioGroupProps} className={styles.categorySwitch}>
      <h2 {...labelProps}>{label}</h2>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
};

export const CategoryRadio = props => {
  const { children, value, label } = props;
  const state = React.useContext(RadioContext);
  const { inputProps } = useRadio(props, state);
  const { isFocusVisible, focusProps } = useFocusRing();

  const isSelected = state.selectedValue === props.value;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} />
      </VisuallyHidden>
      <div
        className={`button ${isSelected ? 'button--primary' : ''} ${
          isFocusVisible ? 'button--focus-ring' : ''
        }`}
      >
        {label}
      </div>
      {children}
    </label>
  );
};

export default CategorySwitch;
