import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Form, Title } from './styles';

const FormLogin = ({ text }) => {
  return (
    <>
      <Wrapper>
        <Title>{text}</Title>
        <Form />
      </Wrapper>
    </>
  );
};

FormLogin.defaultProps = {
  text: '',
};

FormLogin.propTypes = {
  text: PropTypes.string,
};

export default FormLogin;
