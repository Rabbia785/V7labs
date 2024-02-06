import React from "react";
import "./V7Labs.css";
import video from "./video1.mp4";
import Header from "./Header/Header";
import Content from "./Content/Content";

function V7Labs() {
  return (
    <>
      {/* <p className="para">
        Discover Multi-Select and Single-Select Properties-improve the
        granularity and quality of data fed into your AI models.
      </p> */}
      <Header />
      <Content />

      <video width="1200px" height="600px" controls>
        <source src={video} type="video/mp4" />
      </video>
      <br />
      <br />
      <br />

      <div className="statement">
        V7 works with Enterprises, Startups, AI Partners
      </div>
    </>
  );
}

export default V7Labs;
