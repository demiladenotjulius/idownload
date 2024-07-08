import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import images from "./Home/frame1.svg";
import Reused from './Reused';

const Download = ({ onDownload }) => {
  const location = useLocation();
  const { url } = location.state || {};
  const [contentType, setContentType] = useState(null);
  const [contentUrl, setContentUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setContentType(response.headers.get('content-type'));
          return response.blob();
        })
        .then(blob => {
          const objectUrl = URL.createObjectURL(blob);
          setContentUrl(objectUrl);
        })
        .catch(error => {
          console.error('Error fetching content:', error);
          setError(error.message);
          setContentUrl(null); // Clear contentUrl on error
        });
    }
  }, [url]);

  const handleDownloadClick = () => {
    // Pass downloaded content back to parent component
    onDownload({ contentType, contentUrl });
  };

  const renderContent = () => {
    if (error) {
      return <p>Error: {error}</p>;
    }

    if (!contentUrl) return null;

    if (contentType && contentType.startsWith('image/')) {
      return <img src={contentUrl} alt="content" className='mx-auto mt-8 w-[300px]' />;
    } else if (contentType && contentType.startsWith('video/')) {
      return <video src={contentUrl} controls className='mx-auto mt-8 w-[300px]' />;
    } else if (contentType && contentType.startsWith('audio/')) {
      return <audio src={contentUrl} controls className='mx-auto mt-8 w-[300px]' />;
    } else {
      return <p>Content type not supported for display.</p>;
    }
  };

  return (
    <div>
      <Reused />
      <h1 className='text-center mt-12 text-3xl md:text-4xl font-bold'>Making the magic happen!</h1>
      <img src={images} className='mx-auto mt-8 w-[50px]' alt="loading" />
      <div className='text-center mt-4'>
        {url ? (
          <div>
            <p>{url}</p>
            {renderContent()}
            {contentType && (
              <button onClick={handleDownloadClick} className='bg-blue-400 p-[4.5px] text-white mt-4 inline-block'>
                Download
              </button>
            )}
          </div>
        ) : (
          <p>No URL provided.</p>
        )}
      </div>
    </div>
  );
};

export default Download;
