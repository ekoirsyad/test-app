import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Comment = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" preserveAspectRatio="none" {...props}>
    <Path
      fill="#C4C4C4"
      fillRule="evenodd"
      d="M2.083 15.693V6.267c0-1.735 1.4-3.142 3.125-3.142h14.584a3.133 3.133 0 0 1 3.125 3.142v9.426c0 1.735-1.4 3.142-3.125 3.142h-4.426l-2.714 2.387c-1.683 1.481-4.319.28-4.319-1.97v-.417H5.208a3.134 3.134 0 0 1-3.125-3.142Zm8.085 2.148a2.081 2.081 0 0 0-1.835-1.1H5.208a1.045 1.045 0 0 1-1.041-1.048V6.267c0-.578.466-1.047 1.041-1.047h14.584c.575 0 1.041.469 1.041 1.047v9.426c0 .578-.466 1.047-1.041 1.047h-4.426c-.505 0-.992.184-1.372.518l-2.713 2.388a.52.52 0 0 1-.864-.394v-.417a2.125 2.125 0 0 0-.232-.962l-.017-.032ZM7.292 9.375c0-.575.466-1.042 1.041-1.042h8.334a1.042 1.042 0 0 1 0 2.084H8.333a1.042 1.042 0 0 1-1.041-1.042Zm1.041 2.083a1.042 1.042 0 0 0 0 2.084h5.209a1.042 1.042 0 0 0 0-2.084H8.333Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Comment;
