import React, { useEffect, useState } from "react";

import video from "../images/4k.mp4";
import bike from "../images/bike.mp4";
export const Homee = () => {
  const words = ["Welcome", "to", "Journal-X"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 800); // Show next word after 1 second

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div>
          <video autoPlay muted loop id="myVideo" className="d-none d-md-block">
            <source src={video} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            id="myVideo"
            className="d-block d-md-none   "
          >
            <source src={bike} type="video/mp4" />
          </video>
        </div>

        <h1
          style={{
            position: "absolute",

            transform: "translate(-50%, -50%)",
            color: "white",
            animation: "slide-up 2s forwards",
          }}
          className="homebanner"
        >
          Welcome To Journal-X
        </h1>
      </div>

      <footer className="bg-black ">
        <h6 className="m-0 py-1  text-white-50  "> D-LABS</h6>
      </footer>
    </>
  );
};
