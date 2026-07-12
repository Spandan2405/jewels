import dynamic from "next/dynamic";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { useState } from "react";
import PopupVideo from "../common/popup-video";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

const getImageSrc = (source, options) => {
  if (!source) return "";
  return typeof source === "string" ? source : urlFor(source, options);
};

const DetailsThumbWrapper = ({
  imageURLs,
  handleImageActive,
  activeImg,
  imgWidth = 416,
  imgHeight = 480,
  videoURL = false,
}) => {
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
                  type="button"
                  onClick={() => handleImageActive(item)}
                >
                  <Image
                    src={getImageSrc(item, { width: 156, height: 200, quality: 75 })}
                    alt="image"
                    width={78}
                    height={100}
                    sizes="78px"
                    style={{ width: "100%", height: "100%" }}
                  />
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="tab-content m-img flex-col">
          <div className="tab-pane fade show active">
            <div className="tp-product-details-nav-main-thumb p-relative">
              {activeImg === imageURLs?.[1] && videoURL ? (
                <div
                  className="product-video-container"
                  style={{
                    width: imgWidth,
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
                <Image
                  src={getImageSrc(activeImg, {
                    width: imgWidth * 2,
                    height: imgHeight * 2,
                    quality: 75,
                  })}
                  alt="product img"
                  width={imgWidth}
                  height={imgHeight}
                  sizes={`(max-width: 768px) 100vw, ${imgWidth}px`}
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
