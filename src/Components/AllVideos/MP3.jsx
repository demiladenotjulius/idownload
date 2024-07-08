import React from 'react';

const MP3 = ({ media }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <div key={index} className="media-item">
          <audio controls className="w-full h-auto rounded-lg">
            <source src={`/path/to/media/${item}.mp3`} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default MP3;
