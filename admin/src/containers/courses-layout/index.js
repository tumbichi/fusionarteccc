/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import CoursesLayoutSuccess from './components/CoursesLayoutSuccess';

const CoursesLayout = () => {
  return (
    <CoursesLayoutSuccess
      data={[1, 2, 3]}
      loading={false}
      onClickDelete={() => {}}
      onClickEdit={() => {}}
    />
  );
};

export default CoursesLayout;
