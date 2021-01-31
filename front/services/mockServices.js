import courses from '../mock/courses';

export const getAllCourses = async () => {
  try {
    return Promise.resolve(courses);
  } catch (error) {
    return Promise.reject(error);
  }
};
