import React, { useRef } from 'react';
import { useToggleState } from '@react-stately/toggle';
import { useToggleButton } from '@react-aria/button';
import styles from './SiteHeader.module.scss';

const MenuToogle = props => {
  const ref = useRef();
  const { visible } = props;
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);

  return (
    <button
      type="button"
      {...buttonProps}
      className={`${styles.mainMenuToggle} ${visible ? styles.mainMenuToggle_Active : ''}`}
      ref={ref}
    >
      <span>Menu</span>
    </button>
  );
};

export default MenuToogle;
