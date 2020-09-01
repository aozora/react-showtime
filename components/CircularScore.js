import React from 'react';
import { arc } from 'd3-shape';

const CircularScore = ({ score }) => {
  const degreesToRadians = degrees => {
    return (degrees * Math.PI) / 180;
  };

  // const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  //   const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  //
  //   return {
  //     x: centerX + radius * Math.cos(angleInRadians),
  //     y: centerY + radius * Math.sin(angleInRadians)
  //   };
  // };
  //
  // const describeArc = (x, y, radius, startAngle, endAngle) => {
  //   const start = polarToCartesian(x, y, radius, endAngle);
  //   const end = polarToCartesian(x, y, radius, startAngle);
  //   const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  //   const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(
  //     ' '
  //   );
  //
  //   return d;
  // };

  // 360 : 100 = x : 40 --> x = 360*40/100
  const arcPathGenerator = arc()
    .innerRadius(35)
    .outerRadius(40)
    .startAngle(0)
    .endAngle(degreesToRadians((score * 360) / 100))
    .padAngle(0)
    .cornerRadius(20);
  const arcPath = arcPathGenerator();

  return (
    <svg width="124" height="124">
      <title>User Score</title>
      <path fill="var(--color-primary)" d={arcPath} style={{ transform: 'translate(50%, 50%)' }} />
      <g>
        <text fontFamily="Inter" fontSize="32" fontWeight="400" fill="var(--color-primary)">
          <tspan textAnchor="middle" x="58" y="55">
            {score}%
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default CircularScore;
