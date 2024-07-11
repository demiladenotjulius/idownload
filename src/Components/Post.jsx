import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Post = () => {
  const location = useLocation();
  const { mediaDetails } = location.state || {};
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleDownload = async (mediaUrl, isVideo) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', mediaUrl, true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setDownloadProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = isVideo ? 'video.mp4' : 'image.jpg'; 
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

        
        const downloads = JSON.parse(localStorage.getItem('downloads')) || [];
        downloads.push({
          url: mediaUrl,
          is_video: isVideo,
          caption: mediaDetails.result.caption,
          download_time: new Date().toISOString()
        });
        localStorage.setItem('downloads', JSON.stringify(downloads));

        
        setDownloadProgress(0);
      }
    };

    xhr.onerror = () => {
      console.error('Download error');
    };

    xhr.send();
  };

  const handleDownloadAll = async () => {
    if (mediaDetails && mediaDetails.result) {
      const itemsToDownload = mediaDetails.result.album || [];
      itemsToDownload.push({
        url: mediaDetails.result.is_video ? mediaDetails.result.video_url : mediaDetails.result.image_url,
        is_video: mediaDetails.result.is_video,
      });

      for (let i = 0; i < itemsToDownload.length; i++) {
        await handleDownload(itemsToDownload[i].url, itemsToDownload[i].is_video);
      }
    }
  };

  return (
    <div className="text-center mt-12">
            <h1 className="text-red-500 mt-28 text-[20px] md:text-3xl">Download Your Instagram Video</h1>

      {mediaDetails && mediaDetails.result ? (
        <div>
          {mediaDetails.result.is_video ? (
            <video id="video" className="mx-auto w-[300px] mt-4" controls>
              <source src={mediaDetails.result.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={mediaDetails.result.image_url}
              alt="Media content"
              className="mx-auto mt-4"
            />
          )}
          <p className="mt-4">{mediaDetails.result.caption}</p>
          {downloadProgress > 0 && (
            <div className="mt-4 w-[50px] mx-auto">
              <CircularProgressbar
                value={downloadProgress}
                text={`${Math.round(downloadProgress)}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: `rgba(62, 152, 199, ${downloadProgress / 100})`,
                  textColor: '#3e98c7',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          )}
          <button onClick={() => handleDownload(mediaDetails.result.is_video ? mediaDetails.result.video_url : mediaDetails.result.image_url, mediaDetails.result.is_video)} className="bg-blue-400 p-[4.5px] text-white mt-4">
            Download
          </button>
          {mediaDetails.result.album && mediaDetails.result.album.length > 0 && (
            <div>
              <h2 className="mt-4">Album</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {mediaDetails.result.album.map((item, index) => (
                  <div key={index}>
                    {item.is_video ? (
                      <video className="mx-auto w-[150px]" controls>
                        <source src={item.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={item.url}
                        alt="Album content"
                        className="mx-auto w-[150px]"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button onClick={handleDownloadAll} className="bg-blue-400 p-[4.5px] text-white mt-4">
                Download All
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>No media details available.</p>
      )}
    </div>
  );
};

export default Post;
