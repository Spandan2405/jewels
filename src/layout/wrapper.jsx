import React from "react";
import BackToTopCom from "@/components/common/back-to-top";

const Wrapper = ({ children }) => {
  return (
    <div id="wrapper">
      {children} {/* Render the page content */}
      <BackToTopCom /> {/* Button to scroll back to the top */}
    </div>
  );
};

export default Wrapper;
