import React from "react";
import ReactPlayer from "react-player";

const Player = (props) => {
    return props.src ? (
        <ReactPlayer
            url={props.url}
            width="100%"
            height="auto"
            light={<img src={props.src} alt="" width="100%" height="100%"/>}
        />
    ) : (
        <ReactPlayer url={props.url} width="100%" height="auto"/>
    );
};

export default Player;
