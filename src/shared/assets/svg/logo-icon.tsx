import React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
import {COLORS} from '../../styles';

interface LogoIconProps extends Omit<SvgProps, 'fill' | 'viewBox'> {
  size?: number;
  color?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  width = 120,
  height = 130,
}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 679 441">
      <Path
        fill={COLORS.dark_000}
        stroke={COLORS.dark_0076}
        strokeWidth="13.024"
        d="M205.374 432.164l119.611-106.407 38.212 65.028.233.396.287.36c7.48 9.4 16.958 20.368 36.02 28.748 18.802 8.265 46.434 13.809 89.999 13.809H601.928l-5.668-9.777-96.566-166.583-4.242-7.318-.201.2-32.06-54.149L648.719 31.155l12.764-11.374H465.214l-1.889 1.808-72.01 68.938-244.388 223.45-.014.013-.014.012-117.32 108.516-12.21 11.293h186.154l1.851-1.647zM354.84 65.798l2.111-1.936v-5.824l-1.224-1.703a117.268 117.268 0 00-44.432-37.245 117.61 117.61 0 00-56.72-11.46H112.902l5.789 9.82 97.287 165.001 4.084 6.927 5.927-5.434L354.84 65.798z"
      />
    </Svg>
  );
};
