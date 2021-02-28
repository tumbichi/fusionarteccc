/* eslint-disable no-console */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CreateCourseStatus } from './models/status';
import {
  CreateCoursesLoading,
  CreateCourseSuccess,
  CreateCoursesFailure,
  CreateCourse,
} from './components';
import { changeInput } from './actions';

const CreateCourseLayout = (props) => {
  const { status, formData } = useSelector(({ createCourse }) => {
    /* console.log('createCourseSelector', createCourse); */
    return { status: createCourse.status, formData: createCourse.form };
  });
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    dispatch(changeInput(name, value));
  };

  const handleDropdownChange = ({ value }, { name }) => {
    console.log(value, name);
    dispatch(changeInput(name, value));
  };

  const handleAddFile = ({ target }) => {
    const file = target.files[0];
    console.log('queonda', file);
    /* const { image } = formData; */

    /*     if (!file) return;
    if (typeof file === 'string') this.setState({ images: [...images, file] });
    else { */
    /*  } */

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      dispatch(changeInput('image', fileReader.result));
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!formData.title) {
      console.log('no existe title');
      return;
    }
    if (!formData.description) {
      console.log('no existe descripcion');
      return;
    }
    if (!formData.image) {
      console.log('no existe image');
      return;
    }
    if (!formData.price) {
      console.log('no existe price');
      return;
    }
    if (typeof formData.categoryId !== 'number') {
      console.log('no existe category id', formData.categoryId);
      return;
    }
    if (!formData.professor) {
      console.log('no existe profesor');
      return;
    }

    if (formData.lessons.length === 0) {
      console.log('no existen lecciones');
      return;
    }

    console.log('Succefull!', formData);
  };
  // formData={formData}
  switch (status) {
    case CreateCourseStatus.CREATE:
      return (
        <CreateCourse
          formData={formData}
          onAddFile={handleAddFile}
          onChangeInput={handleInputChange}
          onChangeDropdown={handleDropdownChange}
          onSubmit={handleSubmit}
        />
      );
    case CreateCourseStatus.LOADING:
      return <CreateCoursesLoading />;
    case CreateCourseStatus.SUCCESS:
      return <CreateCourseSuccess onChangeInput={handleInputChange} />;
    case CreateCourseStatus.FAILURE:
      return <CreateCoursesFailure />;
    default:
      return <>Puede ser pa </>;
  }
};

export default CreateCourseLayout;
