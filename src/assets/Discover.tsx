import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Discover = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" viewBox="0 0 34 34" preserveAspectRatio="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M21 27a3 3 0 0 0 3-3 3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3 3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3 3 3 0 0 0-3 3v8a3 3 0 0 0 3 3 3 3 0 0 0 3 3h8Zm-9-15h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H12Zm10-2H12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Zm-9 15a1 1 0 0 1-1-1h10a1 1 0 0 1-1 1h-8Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Discover;
