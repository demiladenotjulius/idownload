import React from 'react';

const Pictures = ({ media }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <div key={index} className="media-item">
          <img src={`/path/to/media/${item}.jpg`} alt={item} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default Pictures;
