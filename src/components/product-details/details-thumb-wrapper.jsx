import { urlFor } from "@/lib/sanity";
import { useState } from "react";
import PopupVideo from "../common/popup-video";

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
        <div className="tp-product-details-thumb-nav flex-col">
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
              <img
                src={urlFor(activeImg)}
                alt="product img"
                width={imgWidth}
                height={imgHeight}
              />
              {activeImg === imageURLs[imageURLs.length - 1] && videoURL && (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="tp-product-details-thumb-video"
                >
                  <a className="tp-product-details-thumb-video-btn cursor-pointer popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
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
