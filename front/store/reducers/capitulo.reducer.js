const initialState = {
  id: 0,
  url: 'https://www.youtube.com/watch?v=Oea7QaSgG1s',
  titulo: 'Niveles de seniority',
  descripcion: 'Este es un video del pelade',
  imagen: '',
  archivos: [],
  duracion: 0,
  idCurso: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return {
        ...state,
      }
  }
}