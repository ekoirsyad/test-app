import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Report = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={22} height={22} fill="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M20.167 11a9.167 9.167 0 1 1-18.334 0 9.167 9.167 0 0 1 18.334 0Zm-4.67-5.793a7.333 7.333 0 0 0-10.29 10.29l10.29-10.29Zm1.296 1.296a7.333 7.333 0 0 1-10.29 10.29l10.29-10.29Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Report;
