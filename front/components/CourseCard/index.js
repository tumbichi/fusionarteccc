import React from 'react';

const CourseCard = ({ children, title, goToCourse }) => {
  return (
    <div className="bg-white shadow-2xl rounded-md opacity-80 text-center px-4">
      <p className="font-bold capitalize text-2xl mb-2 text-primary border-b w-full py-2 border-gray-300">{title}</p>
      <div className="h-40 w-52">
        <button
          className="flex flex-col items-center justify-center space-y-3 font-semibold px-8 mt-2 pb-4 text-center w-full h-full"
          onClick={goToCourse}
          type="button"
        >
          {children}
        </button>
      </div>
    </div>
  );
};
export default CourseCard;
