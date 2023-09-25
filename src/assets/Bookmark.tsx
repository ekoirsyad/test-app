import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Bookmark = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={34} height={34} fill="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M25 24.5a.5.5 0 0 1-.5.5H12.83c.11-.313.17-.65.17-1V9.333c0-.184.15-.333.333-.333H24.5a.5.5 0 0 1 .5.5v15Zm-.5 2.5H10a3 3 0 0 1-3-3V12.139C7 11.509 7.51 11 8.139 11H11V9.333A2.333 2.333 0 0 1 13.333 7H24.5A2.5 2.5 0 0 1 27 9.5v15a2.5 2.5 0 0 1-2.5 2.5ZM11 13H9v11a1 1 0 1 0 2 0V13Zm11 3a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h6Zm1 5a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Zm-1-9a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Bookmark;
