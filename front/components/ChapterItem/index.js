import React from 'react';
import PropTypes from 'prop-types';

const ChapterItem = ({ img, chapterTitle, numberOfChapter, duration }) => (
  <div className=" cursor-pointer m-2 p-3 shadow hover:shadow-2xl hover:bg-tertiary rounded">
    <img className="w-28 lg:w-60 h-22" src={img} alt={`${chapterTitle} imagen`} />
    <div className="flex justify-between">
      <p>
        {numberOfChapter}. {chapterTitle}
      </p>
      <p>{duration}</p>
    </div>
  </div>
);

ChapterItem.defaultProps = {
  img: '',
  chapterTitle: '',
  numberOfChapter: 0,
  duration: '',
};

ChapterItem.propTypes = {
  img: PropTypes.string,
  chapterTitle: PropTypes.string,
  numberOfChapter: PropTypes.number,
  duration: PropTypes.string,
};

export default ChapterItem;
