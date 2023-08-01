import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div>
      <iframe
        width="560" // Set the width of the video player (you can adjust this)
        height="315" // Set the height of the video player (you can adjust this)
        src={`https://www.youtube.com/embed/${videoId}`} // Use the videoId prop here
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
