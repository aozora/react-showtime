import React from 'react';

const CircularScore = ({ score }) => {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(
      ' '
    );

    return d;
  };

  return (
    <svg width="124" height="124" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter
          id="a"
          x="-13.4%"
          y="-13.4%"
          width="126.9%"
          height="126.9%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)" transform="translate(7 7)" fill="none" fillRule="evenodd">
        <path
          fill="none"
          stroke="#E6B91E"
          strokeWidth="7"
          d={describeArc(116 / 2, 116 / 2, 54, 0, (score * 360) / 100)}
        />
        <text fontFamily="Montserrat-Medium, Montserrat" fontSize="32" fontWeight="400" fill="#FFF">
          <tspan textAnchor="middle" x="58" y="70">
            {score}%
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default CircularScore;
