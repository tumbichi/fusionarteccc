import styled from 'styled-components';

export const ToolbarWrapper = styled.div.attrs({
  className: 'bg-primary flex justify-between items-center h-12 md:h-16 lg:h-20 w-full',
})``;

export const ImageWrapper = styled.img.attrs({
  className: 'h-16 md:h-20 lg:h-24 mt-6 md:mt-10 lg:mt-12 ml-4 md:ml-6 lg:ml-10 z-50',
  src: '../../static/images/logo.png',
})``;
