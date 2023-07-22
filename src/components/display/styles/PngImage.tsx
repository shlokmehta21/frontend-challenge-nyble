import styled from 'styled-components';
import { ComponentProps } from 'react';
import { optional } from 'utils/styledComponents';

export const ImageWrapper = styled.img<
  {
    src: string;
    height: any;
    margin?: any;
    padding?: any;
    width?: any;
    alignSelf?: string;
  } & ComponentProps<'image'>
>`
  src: ${({ src }) => src};
  display: flex;
  ${optional('alignSelf', 'align-self')}
  height: ${({ height }) => height};
  ${optional('width', 'width', 'auto')}
  ${optional('padding', 'padding')}
  ${optional('margin', 'margin')}
`;
