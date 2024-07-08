// import React from 'react';

// const Reused = () => {
//   return (
//     <div className='text-center md:mt-20 lg:mt-20 mt-12'>
//       <div>
//         <h1 className='text-3xl md:text-5xl font-bold mt-24'>Save files from the internet</h1>
//         <p className='text-xl lg:text-2xl mt-8'>
//           Paste link of videos, images, documents, audio from <br/>
//           Instagram, Facebook, Twitter, and TikTok below.
//         </p>
//       </div>
//       <div>
//         <input type='text' placeholder='paste url here' className='w-[300px] h-8 mt-4 lg:w-[350px] p-2 border border-blue-700' />
//         <button type='button' className='bg-blue-400 p-[4.5px] text-white'>Download</button>
//       </div>
//     </div>
//   );
// }

// export default Reused;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reused = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/download", { state: { url } });
  };

  return (
    <div className="text-center md:mt-20 lg:mt-20 mt-12">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mt-24">
          Save files from the internet
        </h1>
        <p className="text-xl lg:text-2xl mt-8">
          Paste link of videos, images, documents, audio from <br />
          Instagram, Facebook, Twitter, and TikTok below.
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="paste url here"
          className="w-[300px] h-8 mt-4 lg:w-[350px] p-2 border border-blue-700"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-400 p-[4.5px] text-white"
          onClick={handleDownloadClick}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Reused;
