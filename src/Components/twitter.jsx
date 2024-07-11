import React, { useState } from "react";
import axiosInstance from "../Components/axiosinstance";
import { useNavigate } from "react-router-dom";

const Tweet = () => {
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
      const response = await axiosInstance.get('/download-video', {
        params: { url },
        responseType: 'json' 
      });
      console.log('Response from /download-video:', response);

      setMediaDetails(response.data); 
      navigate('/tweets', { state: { mediaDetails: { videoUrl: response.data } } });
    } catch (error) {
      console.error('Show error:', error);
      setError('Failed to fetch media. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center md:mt-20 lg:mt-20 mt-12">
      <h1 className="text-3xl md:text-5xl font-bold mt-24">
        Save files from the internet
      </h1>
      <p className="text-xl lg:text-2xl mt-8">
          Paste link of videos, images, documents from 
          <span className=" ml-2 text-blue-500">Twitter</span>
        </p>
      <form onSubmit={handleShowClick}>
        <input
          type="text"
          placeholder="Paste URL here"
          className="w-[300px] h-8 mt-4 outline-none lg:w-[350px] p-5 border border-blue-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
           <button
            type="submit"
            className="bg-blue-400 p-[9.5px] text-white"
            disabled={loading} // Disable button during loading state
          >
            Show
          </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Tweet;

