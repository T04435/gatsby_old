import React, { ReactChild } from 'react';

const menu = (className?: string): ReactChild => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      strokeWidth="2"
      className={className}
    >
      <g strokeWidth="2">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M2 6h28"
          strokeLinejoin="round"
          transform="translate(0 0.00) rotate(0.00 16 6)"
        />
        <path
          data-color="color-2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M2 16h28"
          strokeLinejoin="round"
          opacity="1"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M2 26h28"
          strokeLinejoin="round"
          transform="translate(0 0) rotate(0 16 26)"
        />
      </g>
    </svg>
  );
};

export const SVG = {
  menu,
};

export type SVGT = keyof typeof SVG;

export interface ISvgProps {
  /* A className to apply to top level container */
  className?: string;
  // The svg to use
  name: SVGT;
}

export const Svg = (props: ISvgProps) => {
  const { name, className } = props;
  return <>{SVG[name](className)}</>;
};
