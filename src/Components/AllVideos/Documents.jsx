import React from 'react';

const Documents = ({ media }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <div key={index} className="media-item">
          <a href={`/path/to/media/${item}.pdf`} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded-lg">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Documents;
