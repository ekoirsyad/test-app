import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Video = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" preserveAspectRatio="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M13 20a2 2 0 0 0 3.414 1.414l.586-.586v2.036a2.5 2.5 0 0 0 2.5 2.5h1.356l1.028 1.041a2 2 0 0 0 3.39-1.041h.226a2.5 2.5 0 0 0 2.5-2.5V19.5a2.5 2.5 0 0 0-2.5-2.5h-.67c.11-.313.17-.65.17-1v-6a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2v1Zm9-3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a.998.998 0 0 1 1 1v2l2-2 .707-.707a1 1 0 0 1 .707-.293H22Zm-2.5 2a.5.5 0 0 0-.5.5v3.364a.5.5 0 0 0 .5.5h1.983a.5.5 0 0 1 .356.148l.347.352L23.308 25v-1.136a.5.5 0 0 1 .5-.5H25.5a.5.5 0 0 0 .5-.5V19.5a.5.5 0 0 0-.5-.5h-6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Video;
