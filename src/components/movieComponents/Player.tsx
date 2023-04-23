import React from "react";
import ReactPlayer from "react-player";

const Player = ({url}) => {
  return (
    <ReactPlayer
      url={url}
      width="100%"
      light={<img src='https://kartinkof.club/uploads/posts/2022-03/1648332001_4-kartinkof-club-p-di-kaprio-ostrov-proklyatikh-mem-4.jpg' alt='Thumbnail' width='100%'/>}
    />
  );
};

export default Player;
