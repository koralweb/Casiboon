import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../styles';

export const PodcastIcon = () => {
  return (
    <Svg width="22" height="22" fill="none" viewBox="0 0 77 77">
      <Path
        fill={COLORS.dark_000}
        d="M60.48 15.91v28.65H44.564v15.915H15.915V15.911H60.48zm0-6.366H15.915c-3.501 0-6.366 2.865-6.366 6.367v44.564c0 3.502 2.865 6.366 6.366 6.366h31.832l19.1-19.099V15.911c0-3.502-2.866-6.367-6.367-6.367zM38.198 44.56H22.281v-6.366h15.915v6.366zm15.915-12.732H22.282V25.46h31.831v6.366z"
      />
    </Svg>
  );
};
