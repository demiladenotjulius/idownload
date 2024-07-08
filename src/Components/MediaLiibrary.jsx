import React, { useState } from 'react';
import AllMedia from './AllVideos/AllMedia';
import MP3 from './AllVideos/MP3';
import Documents from './AllVideos/Documents';
import Pictures from './AllVideos/Pictures';
import Videos from './AllVideos/Videos';

const MediaLibrary = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const media = {
    all: [...Array(12).keys()].map(i => `media-${i}`),
    videos: [...Array(3).keys()].map(i => `video-${i}`),
    audios: [...Array(3).keys()].map(i => `audio-${i}`),
    pictures: [...Array(3).keys()].map(i => `picture-${i}`),
    documents: [...Array(3).keys()].map(i => `document-${i}`)
  };

  return (
    <div className="p-4">
      <nav className="flex justify-around mb-4">
        <button onClick={() => setCurrentCategory('all')} className="py-2 px-4 focus:border-b-2">All</button>
        <button onClick={() => setCurrentCategory('videos')} className="py-2 px-4 focus:border-b-2">Videos</button>
        <button onClick={() => setCurrentCategory('MP3')} className="py-2 px-4 focus:border-b-2">MP3</button>
        <button onClick={() => setCurrentCategory('pictures')} className="py-2 px-4 focus:border-b-2">Pictures</button>
        <button onClick={() => setCurrentCategory('documents')} className="py-2 px-4 focus:border-b-2">Documents</button>
      </nav>
      <div>
        {currentCategory === 'all' && <AllMedia media={media.all} />}
        {currentCategory === 'videos' && <Videos media={media.videos} />}
        {currentCategory === 'audios' && <Audios media={media.audios} />}
        {currentCategory === 'pictures' && <Pictures media={media.pictures} />}
        {currentCategory === 'documents' && <Documents media={media.documents} />}
      </div>
    </div>
  );
};

export default MediaLibrary;
