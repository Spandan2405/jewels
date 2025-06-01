import React from "react";
import ModalVideo from "react-modal-video";

const PopupVideo = ({ isVideoOpen, setIsVideoOpen, videoURL }) => {
  return (
    <ModalVideo
      channel="custom"
      autoplay
      isOpen={isVideoOpen}
      url={videoURL}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default PopupVideo;
