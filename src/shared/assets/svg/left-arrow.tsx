import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../styles';

export const LeftArrow = () => {
  return (
    <Svg width={22} height={22} viewBox="0 0 64 64" fill="none">
      <Path
        d="M31.723 11.745h0a3.115 3.115 0 00-4.405 0h0L9.146 29.916h0a3.115 3.115 0 000 4.405h0l18.172 18.173h0l.007.006a3.115 3.115 0 004.405-4.405h0l-.007-.006L18.87 35.235h34.017a3.115 3.115 0 100-6.23H18.868L31.723 16.15h0a3.115 3.115 0 000-4.405z"
        fill={COLORS.dark_00356B}
        stroke={COLORS.dark_00356B}
        strokeWidth={1.03843}
      />
    </Svg>
  );
};
