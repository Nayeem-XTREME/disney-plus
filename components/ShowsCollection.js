import React from 'react';
import { ShowThumbnail } from './';

const ShowsCollection = ({ data, title }) => {
  return (
    <div
      className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] 
      mx-auto"
    >
      <h2>{title}</h2>
      <div
        className="flex space-x-6 overflow-y-hidden overflow-x-scroll
        scrollbar-hide p-2 -m-2"
      >
        {data.map((item, index) => (
          <ShowThumbnail data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShowsCollection;
