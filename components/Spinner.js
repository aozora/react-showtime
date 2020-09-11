import React from 'react';
import { useProgressBar } from '@react-aria/progress';

function Spinner() {
  const { progressBarProps } = useProgressBar({
    isIndeterminate: true,
    'aria-label': 'Loading...'
  });

  const center = 16;
  const strokeWidth = 4;
  const r = 16 - strokeWidth;
  const c = 2 * r * Math.PI;
  const offset = c - (1 / 4) * c;

  return (
    <svg
      id="spinner"
      {...progressBarProps}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth={strokeWidth}
    >
      <circle role="presentation" cx={center} cy={center} r={r} stroke="gray" />
      <circle
        role="presentation"
        cx={center}
        cy={center}
        r={r}
        stroke="orange"
        strokeDasharray={c}
        strokeDashoffset={offset}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          begin="0s"
          dur="1s"
          from="0 16 16"
          to="360 16 16"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Spinner;
