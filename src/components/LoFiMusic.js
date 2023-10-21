import React, { useState } from "react";

const LoFiMusic = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const handleYoutubeLinkChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleLoadVideo = () => {
    const videoId = extractYoutubeVideoId(youtubeLink);
    if (videoId) {
      setYoutubeVideoId(videoId);
    }
  };

  const extractYoutubeVideoId = (url) => {
    const regex = /[?&]v=([^?&]+)/;
    const match = url.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  return (
    <div className="bg-violet-00 p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Lo-Fi Music
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter YouTube Link"
          className="w-full p-2 rounded border"
          value={youtubeLink}
          onChange={handleYoutubeLinkChange}
        />
        <button
          onClick={handleLoadVideo}
          className="bg-violet-500 hover:bg-violet-900 text-white p-2 ml-2 mt-2 content-center rounded"
        >
          Load Video
        </button>
      </div>
      {youtubeVideoId && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="YouTube Video"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LoFiMusic;
