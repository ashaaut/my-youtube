import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState();
  const getVideos = async () => {
    const videoData = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await videoData.json();
    setVideos(jsonData.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  if (!videos) return;
  return (
    <div className="flex flex-wrap">
      {videos.map((videoInfo) => (
        <Link to={"/watch?v="+videoInfo.id} key={videoInfo.id}>
          {" "}
          <VideoCard videoInfo={videoInfo}  />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
