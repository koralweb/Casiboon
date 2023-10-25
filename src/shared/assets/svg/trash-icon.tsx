import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const TrashIcon = () => {
  return (
    <Svg width={22} height={22} viewBox="0 0 61 61" fill="none">
      <G
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M7.625 15.25h45.75M20.333 15.25v-5.083a5.083 5.083 0 015.084-5.084h10.166a5.083 5.083 0 015.084 5.084v5.083m7.625 0v35.583a5.083 5.083 0 01-5.084 5.084H17.792a5.083 5.083 0 01-5.084-5.084V15.25h35.584zM25.417 27.958v15.25M35.583 27.958v15.25" />
      </G>
    </Svg>
  );
};
