import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Down = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={20} height={18} fill="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="m7.254 2.704.049.022.065.03a7.021 7.021 0 0 0 5.331-.028L19.137.051a.611.611 0 0 1 .703.172.646.646 0 0 1 .075.735l-9.37 16.721a.632.632 0 0 1-.546.32.614.614 0 0 1-.541-.32L.086.958A.651.651 0 0 1 .158.22.611.611 0 0 1 .863.05l6.391 2.655Zm-.643 1.687L3.304 3.014 10 14.961l4.433-7.908c-1.07-.191-2.201-.513-3.236-.856A48.037 48.037 0 0 1 6.61 4.391Zm8.764.984 1.323-2.36L13.39 4.39a8.876 8.876 0 0 1-.918.324c.998.304 2.01.553 2.903.661Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Down;
