import { urlFor } from "@/lib/sanity";
import { useState } from "react";
import PopupVideo from "../common/popup-video";
import ReactPlayer from "react-player";

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoURL = false,
}) => {
  // console.log(imageURLs);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
        <div className={`tp-product-details-thumb-nav flex-col`}>
          <nav>
            <div className="nav nav-tabs flex-sm-column">
              {imageURLs?.map((item, i) => (
                <button
                  key={i}
                  className={`nav-link ${item.i === activeImg ? "active" : ""}`}
                  onClick={() => handleImageActive(item)}
                >
                  {
                    <img
                      src={item}
                      alt="image"
                      width={78}
                      height={100}
                      style={{ width: "100%", height: "100%" }}
                    />
                  }
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="tab-content m-img flex-col">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              {activeImg === imageURLs[1] && videoURL ? (
                <div
                  className="product-video-container"
                  style={{
                    width: imgWidth,
                    // height: imgHeight,
                    maxWidth: "100%",
                    aspectRatio: `${imgWidth}/${imgHeight}`,
                    marginBottom: "10px",
                  }}
                >
                  <ReactPlayer
                    url={videoURL}
                    width="100%"
                    height="100%"
                    controls
                    playing
                    muted
                    loop
                    playsinline
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload",
                          disablePictureInPicture: true,
                        },
                      },
                    }}
                    className="product-video"
                    style={{
                      display: "block",
                    }}
                  />
                </div>
              ) : (
                <img
                  src={urlFor(activeImg)}
                  alt="product img"
                  width={imgWidth}
                  style={{
                    width: imgWidth,
                    maxWidth: "100%",
                    objectFit: "contain",
                    aspectRatio: `${imgWidth}/${imgHeight}`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {videoURL && (
        <PopupVideo
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
          videoURL={videoURL}
        />
      )}
    </>
  );
};

export default DetailsThumbWrapper;
