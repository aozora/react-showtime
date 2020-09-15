/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useId } from '@react-aria/utils';
import styles from './CategorySwitch.module.scss';

// const RadioContext = React.createContext();

export const CategorySwitch = ({ radios, label, initialValue, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const name = useId();
  // const state = {
  //   selectedValue,
  //   onChange: value => setSelectedValue(value)
  // };
  // const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  // useEffect(() => {
  //   onChange(state.selectedValue);
  // }, [state.selectedValue]);

  const handleOnChange = event => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className={styles.categorySwitch}>
      <h2>{label}</h2>
      <form>
        <fieldset>
          {radios &&
            radios.map(radio => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label
                key={radio.value}
                className={`button ${selectedValue === radio.value ? 'button--primary' : ''}`}
              >
                <input
                  type="radio"
                  name={name}
                  checked={selectedValue === radio.value}
                  value={radio.value}
                  onChange={handleOnChange}
                />
                <span>{radio.label}</span>
              </label>
            ))}
        </fieldset>
      </form>
    </div>
  );
};

export default CategorySwitch;
