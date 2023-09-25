import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Up = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={22} height={22} fill="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="m8.254 17.297.049-.021.065-.03a7.021 7.021 0 0 1 5.331.027l6.438 2.677a.61.61 0 0 0 .703-.171.646.646 0 0 0 .075-.735l-9.37-16.721a.632.632 0 0 0-.546-.321.614.614 0 0 0-.541.32L1.086 19.044a.652.652 0 0 0 .072.737.611.611 0 0 0 .705.171l6.391-2.655Zm-.643-1.686-3.307 1.376L11 5.041l4.433 7.908c-1.07.191-2.201.513-3.236.855a48.05 48.05 0 0 0-4.587 1.807Zm8.764-.985 1.323 2.36-3.308-1.375a8.902 8.902 0 0 0-.918-.324c.998-.303 2.01-.552 2.903-.66Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Up;
