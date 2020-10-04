import React from 'react';
import { SVG, Svg, SVGT } from './svg';
import { Meta } from '@storybook/react';

export default {
  title: 'components/common/svg',
  component: Svg,
} as Meta;

export const base = () => (
  <>
    {Object.keys(SVG).map((svg: any) => (
      <Svg name={svg} key={svg} />
    ))}
  </>
);
