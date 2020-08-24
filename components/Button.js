import React, { useRef } from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';

const Button = props => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { children, type, className } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button
      type={type || 'submit'}
      {...buttonProps}
      {...focusProps}
      className={`${className} ${isFocusVisible ? 'button--focus-ring' : ''}`}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;
