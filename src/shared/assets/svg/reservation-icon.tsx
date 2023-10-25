import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {COLORS} from '../../styles';

export const ReservationIcon = () => {
  return (
    <Svg width="22" height="22" fill="none" viewBox="0 0 77 77">
      <Path
        fill={COLORS.dark_000}
        d="M68.152 36.866L39.504 8.217a6.327 6.327 0 00-4.489-1.846H12.733c-3.501 0-6.366 2.865-6.366 6.366V35.02c0 1.751.7 3.343 1.878 4.52l28.649 28.65a6.326 6.326 0 004.488 1.846c1.75 0 3.342-.7 4.488-1.879l22.282-22.282a6.224 6.224 0 001.878-4.488 6.43 6.43 0 00-1.878-4.52zM41.382 63.7L12.733 35.02V12.736h22.282v-.032l28.65 28.649L41.381 63.7z"
      />
      <Path
        fill={COLORS.dark_000}
        d="M20.69 25.47a4.775 4.775 0 100-9.55 4.775 4.775 0 000 9.55z"
      />
    </Svg>
  );
};
