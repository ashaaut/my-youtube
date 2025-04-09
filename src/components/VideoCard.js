import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  // console.log(videoInfo.contentDetails.caption);

  return (
    <div className="m-2 p-2 w-72 shadow-sm rounded-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="img" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div >
      <VideoCard videoInfo={videoInfo} />
      <div>{videoInfo.contentDetails.caption}</div>
    </div>
  );
};
export default VideoCard;
