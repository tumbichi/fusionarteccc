import React from 'react';
import {} from './styles';
import Button from '../../components/Button';
import { FlexRowReverseContainer as Container } from '../../layouts';

const SeeMoreCoursesLayout = ({ goToHome }) => {
  return (
    <Container>
      <Button text="+" />
      <Button text="Ver mas cursos" onClick={goToHome} />
    </Container>
  );
};

export default SeeMoreCoursesLayout;
