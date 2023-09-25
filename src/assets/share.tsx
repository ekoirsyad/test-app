import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Share = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={22} height={22} fill="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M16.5 9.167a3.65 3.65 0 0 1-2.03-.613l-5.087 2.458 4.928 2.546a3.667 3.667 0 1 1-1.166 1.461l-4.416-2.28A3.666 3.666 0 0 1 1.833 11a3.667 3.667 0 0 1 6.91-1.714l4.47-2.16A3.667 3.667 0 1 1 16.5 9.166Zm0-5.5a1.833 1.833 0 1 0 0 3.666 1.833 1.833 0 0 0 0-3.666Zm-11 5.5a1.833 1.833 0 1 0 0 3.666 1.833 1.833 0 0 0 0-3.666Zm9.167 7.333a1.833 1.833 0 1 1 3.666 0 1.833 1.833 0 0 1-3.666 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Share;
