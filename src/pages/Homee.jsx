import React, { useEffect, useState } from "react";

import video from "../images/4k.mp4";
import bike from "../images/bike.mp4";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { NavBar } from "../components/NavBar";
import { CustomNavBar } from "../components/CustomNavBar";
export const Homee = () => {
  const words = ["Welcome", "to", "Journal-X"];
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });

    if (sessionStorage.getItem("usermail")) {
      setUser(sessionStorage.getItem("usermail"));
    }
  }, []);

  useEffect(() => {
    document.title = "Journal-X";
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 800); // Show next word after 1 second

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className=" h-100  ">
      {user ? <CustomNavBar /> : <NavBar />}

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
            className="d-block d-md-none      "
          >
            <source src={bike} type="video/mp4" />
          </video>
        </div>

        <h1
          style={{
            position: "absolute",
            top: "20%",
            color: "white",
            animation: "slide-up 2s forwards",
            fontSize: "70px",
            fontWeight: "bold",
          }}
          className="homebanner opacity-75"
        >
          Welcome To Journal-X
        </h1>
      </div>
      <footer className="bg-black   ">
        <h6 className="m-0  pb-2    text-white-50 text-center   ">
          {" "}
          A Product of D-Labs
        </h6>
      </footer>
    </div>
  );
};
