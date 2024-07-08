// import React from 'react';

// const AllMedia = ({ media, downloadedContent }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {media.map((item, index) => (
//         <div key={index} className="media-item">
//           {/* Display downloaded content if available */}
//           {downloadedContent && downloadedContent.contentType.startsWith('image/') && (
//             <img src={downloadedContent.contentUrl} alt="Downloaded content" className="w-full h-auto rounded-lg" />
//           )}
//           {/* Display regular media */}
//           {!downloadedContent && (
//             <img src={`/path/to/media/${item}.jpg`} alt={item} className="w-full h-auto rounded-lg" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllMedia;

import React from 'react';

const AllMedia = ({ media, downloadedContent }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {media.map((item, index) => (
        <div key={index} className="media-item">
          {/* Display downloaded content if available */}
          {downloadedContent && downloadedContent.contentType.startsWith('video/') && (
            <video src={downloadedContent.contentUrl} controls className="w-full h-auto rounded-lg" />
          )}
          {/* Display regular media */}
          {!downloadedContent && (
            <img src={`/path/to/media/${item}.jpg`} alt={item} className="w-full h-auto rounded-lg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AllMedia;


