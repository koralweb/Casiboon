import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import { COLORS } from '../../styles';

export const ContactsIcon = () => {
  return (
    <Svg width={22} height={22} viewBox="0 0 64 62">
      <G clipPath="url(#clip0_1_42)">
        <Path
          d="M31.855 61.117c-3.478-1.67-6.625-3.441-9.44-5.312-2.816-1.87-5.28-3.66-7.392-5.371-2.111-1.711-3.964-3.74-5.559-6.088-1.594-2.348-2.919-4.387-3.975-6.118-1.055-1.73-1.935-4.009-2.64-6.834-.703-2.825-1.242-5.142-1.614-6.953-.373-1.81-.652-4.407-.839-7.789-.186-3.382-.29-6.028-.31-7.938C.065 6.804.055 3.9.055 0c0 1.035 1.552 1.93 4.658 2.686 3.106.756 6.853 1.134 11.242 1.134 4.39 0 8.137-.378 11.242-1.134C30.303 1.93 31.856 1.035 31.856 0c0 1.035 1.552 1.93 4.658 2.686 3.105.756 6.853 1.134 11.242 1.134 4.39 0 8.136-.378 11.242-1.134C62.103 1.93 63.656 1.035 63.656 0c0 3.9-.01 6.804-.03 8.714-.021 1.91-.125 4.556-.311 7.938-.187 3.382-.466 5.979-.839 7.789-.373 1.81-.91 4.128-1.615 6.953-.704 2.825-1.583 5.103-2.64 6.834-1.055 1.731-2.38 3.77-3.974 6.118-1.595 2.348-3.448 4.377-5.56 6.088-2.111 1.71-4.575 3.501-7.39 5.371-2.816 1.87-5.963 3.641-9.441 5.312zm0-53.477c0 1.034-1.17 1.93-3.509 2.686-2.34.756-5.145 1.134-8.416 1.134a41.2 41.2 0 01-6.646-.538c-2.194-.358-3.954-.835-5.28-1.432 0 3.143.042 5.67.125 7.58.083 1.91.28 4.188.59 6.834.31 2.646.777 4.824 1.398 6.535.62 1.711 1.511 3.641 2.67 5.79 1.16 2.148 2.578 4.019 4.255 5.61 1.677 1.592 3.758 3.243 6.242 4.954 2.485 1.71 5.342 3.303 8.572 4.775V7.64z"
          fill={COLORS.dark_000}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_42">
          <Path fill={COLORS.dark_000} d="M0 0H63.6637V61.1172H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};