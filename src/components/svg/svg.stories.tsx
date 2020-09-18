import React from 'react';
import { SVG, Svg, SVGT } from './svg';
import { Meta } from '@storybook/react';

export default {
  title: 'component/common/svg',
  component: Svg,
} as Meta;

export const base = () => (
  <>
    {Object.keys(SVG).map((svg: SVGT) => (
      <Svg name={svg} key={svg} />
    ))}
  </>
);
