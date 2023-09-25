import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Edit = (props: SvgProps) => (
  <Svg preserveAspectRatio="none" width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M13.447 1.014a1.92 1.92 0 0 1 2.714 0l2.825 2.825c.75.75.75 1.964 0 2.714L7.271 18.27c-.267.267-.607.449-.976.524l-3.543.717A1.92 1.92 0 0 1 .49 17.248l.717-3.543c.075-.37.257-.709.524-.976L13.447 1.014ZM2.785 15.587l.123-.61 2.114 2.115-.609.123-2.042.414.414-2.042Zm3.95.503L3.91 13.265l8.24-8.24 2.825 2.825-8.24 8.24Zm9.597-9.597 1.297-1.297-1.357-1.357-.11-.11-1.358-1.358-1.297 1.297 2.825 2.825Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Edit;
