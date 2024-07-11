import React, { useEffect, useState } from 'react';

const MediaLibrary = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    const storedDownloads = JSON.parse(localStorage.getItem('downloads')) || [];
    setDownloads(storedDownloads);
  }, []);

  return (
    <div className="p-4">
      <h1>Previous Downloads</h1>
      {downloads.length === 0 ? (
        <p>No downloads yet.</p>
      ) : (
        <ul>
          {downloads.map((download, index) => (
            <li key={index} className="mt-4">
              {download.is_video ? (
                <video controls className="mx-auto w-[300px]">
                  <source src={download.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={download.url}
                  alt="Media content"
                  className="mx-auto mt-4"
                />
              )}
              <p className="mt-2">{download.caption}</p>
              <p className="text-gray-500">{new Date(download.download_time).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MediaLibrary;

