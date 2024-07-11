import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './twitterpost.css'


function Tweets() {
  const location = useLocation();
  const { mediaDetails } = location.state || {};
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const handleDownload = async () => {
    setShowProgress(true);
    if (mediaDetails && mediaDetails.videoUrl) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', mediaDetails.videoUrl, true);
      xhr.responseType = 'blob';

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          console.log(progress); 

          setDownloadProgress(progress); 
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = xhr.response;
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.setAttribute('download', 'DownloadedVideo.mp4');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(downloadUrl);
          setDownloadProgress(0); 
          setShowProgress(false); 
        }
      };

      xhr.onerror = () => {
        console.error('Download error');
        setDownloadProgress(0); 
        setShowProgress(false); 
      };

      xhr.send();
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-blue-500 mt-28 text-[20px] md:text-3xl">Download Your Twitter Video</h1>
      {mediaDetails && mediaDetails.videoUrl ? (
        <>
          <div className="flex justify-center items-center -mt-36 h-screen">
            <video
              src={mediaDetails.videoUrl}
              controls
              className="w-96 h-96 object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          {showProgress && (
            <div style={{ width: 100, height: 80, margin: '20px auto', zIndex: 1000, marginTop: '-150px ' }}>
              <CircularProgressbar
                value={downloadProgress}
                text={`${Math.round(downloadProgress)}%`}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${downloadProgress / 100})`,
                  textColor: '#3e98c7',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',
                })}
              />
            </div>
          )}
          <button
            className="bg-blue-400"
            style={{
              position: "absolute",
              top: "95vh",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "15px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out"
            }}
            onClick={handleDownload}
          >
            Download Video
          </button>
        </>
      ) : (
        <p>No video URL provided</p>
      )}
    </div>
  );
}

export default Tweets;

