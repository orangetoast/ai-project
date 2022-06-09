import React from 'react';
import { Img } from './Image.style';
import { ImgProps } from 'components/types/image';
function Image({ src, alt }: ImgProps) {
  return <Img src={src} alt={alt} />;
}

export default Image;
