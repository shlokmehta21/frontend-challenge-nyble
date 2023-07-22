import React, { ComponentProps } from 'react';
import { ImageWrapper } from './styles/PngImage';

type ImagePropsType = {
  src: string;
  height?: any;
  margin?: any;
  padding?: any;
  width?: any;
  alignSelf?: string;
  className?: string;
} & ComponentProps<'image'>;

const PngImage = ({
  src,
  width = 'auto',
  margin = '0',
  padding = '0',
  height = '48px',
  type = 'image',
  alignSelf,
  className,
}: ImagePropsType) => {
  return (
    <ImageWrapper
      height={height}
      margin={margin}
      padding={padding}
      width={width}
      type={type}
      src={src}
      alignSelf={alignSelf}
      className={className}
    ></ImageWrapper>
  );
};

export default PngImage;
