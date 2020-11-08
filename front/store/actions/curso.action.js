export const TYPE_SET_CURSO = 'SET_CURSO';

export const setCurso = (curso) => {
  return {
    type: TYPE_SET_CURSO,
    payload: curso,
  };
};
