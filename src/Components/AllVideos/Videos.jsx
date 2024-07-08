import React from 'react';

const Videos = ({ media }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <div key={index} className="media-item">
          <video controls className="w-full h-auto rounded-lg">
            <source src={`/path/to/media/${item}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default Videos;

