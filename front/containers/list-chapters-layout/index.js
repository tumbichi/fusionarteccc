/* eslint-disable react/no-array-index-key */
import React from 'react';
import ChapterItem from '../../components/ChapterItem';

const ListChaptersLayout = () => {
  const listOfChapters = [
    {
      img:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      chapterTitle: 'Estilos de bandas',
      duration: '10m',
    },
    {
      img:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      chapterTitle: 'Estilos de bandas 2',
      duration: '10m',
    },
    {
      img:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      chapterTitle: 'Estilos de bandas 3',
      duration: '10m',
    },
    {
      img:
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      chapterTitle: 'Estilos de bandas 4',
      duration: '10m',
    },
  ];
  return (
    <div className=" overflow-y-scroll w-32 lg:w-64 flex flex-col bg-secondary">
      {listOfChapters.map(({ img, chapterTitle, duration }, index) => (
        <ChapterItem
          key={chapterTitle + Math.random() * (index + 100)}
          img={img}
          chapterTitle={chapterTitle}
          duration={duration}
          numberOfChapter={index}
        />
      ))}
    </div>
  );
};

export default ListChaptersLayout;
