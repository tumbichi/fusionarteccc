import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input.attrs({
  className: 'bg-secondary focus:outline-none focus:border-primary focus:placeholder-primary border-b-2',
})``;

export const Label = styled.label.attrs({
  className: 'text-red-500',
})``;

export const InputContainer = styled.label.attrs({
  className: 'flex flex-col mx-6 my-4',
})``;
