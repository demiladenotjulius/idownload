import React, { useState } from "react";
import axiosInstance from "../Components/axiosinstance";
import { useNavigate } from "react-router";

const Reused = () => {
  const [url, setUrl] = useState("");
  const [mediaDetails, setMediaDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 


  const handleShowClick = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a valid URL.");
      return;
    }
    setLoading(true);
    setError("");
    setMediaDetails(null);
    try {
      const response = await axiosInstance.get('/download/file', {
        params: { url },
        responseType: 'json' 
      });
      console.log('Response from /download/file:', response);

      setMediaDetails(response.data); 
      navigate('/post', { state: { mediaDetails: response.data } }); 

    } catch (error) {
      console.error('Show error:', error);
      setError('Failed to fetch media. Please check the URL and try again.');
    } finally {
      setLoading(false);

    }
  };

  return (
    <div className="text-center md:mt-20 lg:mt-20 mt-12">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold mt-24">
          Save files from the internet
        </h1>
        <p className="text-xl lg:text-2xl mt-8">
          Paste link of videos, images, documents from 
          <span className=" ml-2 text-[#F46436]">Instagram</span>
        </p>
      </div>
      <div>
        <form onSubmit={handleShowClick}>
          <input
            type="text"
            placeholder="paste url here"
            className="w-[300px] h-8 mt-4 outline-none  lg:w-[350px] p-5 border border-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-400 p-[9.5px] text-white"
            disabled={loading} 
          >
            Show
          </button>
        </form>
      </div>
      <div className="mt-8">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {/* {mediaDetails && mediaDetails.result && (
          <div >
            {mediaDetails.result.is_video ? (
              <video controls className="mx-auto w-[300px] mt-4">
                <source src={mediaDetails.result.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={mediaDetails.result.image_url}
                alt="Media content"
                className="mx-auto mt-4"
              />
            )} */}
            {/* <p className="w-5 mt-4">{mediaDetails.result.caption}</p> */}
          {/* </div>
        )} */}
      </div>
    </div>
  );
};

export default Reused;
