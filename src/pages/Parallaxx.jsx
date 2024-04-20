import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import sun from "../images/parallax0.png";
import jx from "../images/jx.png";
import parallax1 from "../images/parallax1.png";
import { motion } from "framer-motion";
import parallax3 from "../images/parallax3.png";
import parallax4 from "../images/parallax4.png";
import parallax5 from "../images/parallax5.png";
import parallax6 from "../images/parallax6.png";
import parallax7 from "../images/parallax7.png";
import parallax8 from "../images/parallax8.png";
import log1 from "../images/candles.png";
import hand from "../images/hand.png";
import black from "../images/black.jpg";
import books from "../images/books.png";
import { CustomNavBar } from "../components/CustomNavBar";
import Footer from "./Footer";
import { NavBar } from "../components/NavBar";

const Parallaxx = () => {
  const [user, setUser] = useState("");
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const refC = useRef();
  const text = " J o u r n a l - X ".split(" ");
  const text2 = "welcome  to ".split(" ");

  //-------------

  useEffect(() => {
    if (sessionStorage.getItem("usermail")) {
      setUser(sessionStorage.getItem("usermail"));
    }
    const checkScroll = () => {
      const di = document.getElementsByClassName("inner");
      let div = di[0];

      //
      if (div.scrollTop >= 350) {
        console.log(div.scrollTop); // Call your function
        ref3.current.classList.add("drop-from-left");
        ref3.current.classList.remove("d-none");
        ref2.current.classList.add("drop-from-right");
        ref2.current.classList.remove("d-none");
      }
      if (div.scrollTop >= 750) {
        console.log("yeasss");
        ref.current.classList.add("drop-from-top");
        ref.current.classList.remove("d-none");
        refC.current.classList.add("drop-from-right");
        refC.current.classList.remove("d-none");
      }
      if (div.scrollTop >= 1400) {
        console.log(div.scrollTop); // Call your function
        ref4.current.classList.add("drop-from-right");
        ref4.current.classList.remove("d-none");
        ref5.current.classList.add("drop-from-bottom");
        ref5.current.classList.remove("d-none");
      }
    };

    //getting div by class and add event listerner
    const di = document.getElementsByClassName("inner");
    let div = di[0];
    if (div) {
      div.addEventListener("scroll", checkScroll);

      // Don't forget to remove the event listener on cleanup
      return () => {
        div.removeEventListener("scroll", checkScroll);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount
  return (
    <div>
      {user ? <CustomNavBar /> : <NavBar />}
      <div>
        <Parallax pages={4} className="inner">
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={1.65}
            style={{
              backgroundImage: `url(${sun})`,
              backgroundSize: "cover",
              width: "100% ",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.1}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.2}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.3}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.4}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.5}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0.4}
            speed={0.01}
            // onClick={() => ref.current.scrollTo(0)}
          >
            <div className="text-center">
              <h3
                className="drop-from-top"
                style={{ fontSize: "50px", fontWeight: "bold" }}
              >
                Welcome to
              </h3>

              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: i / 5,
                  }}
                  style={{ fontSize: "100px", fontWeight: "bold" }}
                  key={i}
                >
                  {el}
                </motion.span>
              ))}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.6}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <ParallaxLayer
            offset={0}
            speed={0.7}
            factor={1.6}
            style={{
              backgroundImage: `url(${parallax8})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <ParallaxLayer
            offset={1.4}
            speed={0.3}
            factor={1.1}
            style={{
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // border: "1px solid white",
              display: "flex",
            }}
          >
            <main className="bg-black w-100  p-4 border-white h-75">
              <div
                className="m-0 text-white-50  d-md-flex      p-4 rounded  rounded-3 "
                style={{ height: "100%" }}
              >
                <div
                  className="m-0 text-white-50         ms-auto  col-6 align-content-center lefty  d-none   mt-4  rounded  rounded-3 ps-3      "
                  style={{
                    height: "80%",
                    width: "560px",
                  }}
                  ref={ref2}
                >
                  <p
                    className="   text-white-50      "
                    style={{ fontSize: "25px" }}
                  >
                    <front className="text-white">
                      A unique journal platform
                    </front>
                    <br /> where every trade tells a story. <br /> Dive into the
                    world of personalized trade journaling, Track your trades,
                    analyze performance, and gain valuable insights to sharpen
                    your strategy.
                  </p>
                  <a href="/signup">
                    <button className="btn bg-light text-dark    xtra ">
                      Hop in !
                    </button>
                  </a>
                </div>
                <div
                  className="m-0 text-white-50      ms-auto  col-6 align-content-center righty d-none  mt-4  rounded  rounded-3 ps-3      "
                  style={{
                    height: "80%",
                    width: "560px",
                    backgroundColor: "#222222",
                  }}
                  ref={ref3}
                >
                  <img
                    src={hand}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </main>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1.999}
            // speed={0.1}
            // factor={1}
            style={{
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <main className="bg-black w-100   p-4 border-white h-75">
              <div
                className="m-0 text-white-50 d-md-flex      p-4 rounded  rounded-3 "
                style={{ height: "100%" }}
              >
                <div
                  className="m-0 text-white-50     ms-auto  col-6 align-content-center  mt-4  rounded  rounded-3 ps-3  d-none    "
                  style={{
                    height: "80%",
                    width: "560px",
                    backgroundColor: "#222222",
                  }}
                  ref={ref}
                >
                  <div className="d-flex ">
                    {/* <h6 className="">Latest </h6> */}
                    <h6 className="ms-auto me-3 ">
                      <a href="/login" style={{ color: "inherit" }}>
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </h6>
                  </div>
                  <h4 className=" fw-bold text-white   ">
                    Find Your Trading Edge
                  </h4>
                  <p
                    className="   text-white-50   "
                    style={{ fontSize: "22px" }}
                  >
                    Discover Your Edge: Uncover insights, trends, and strategies
                    to elevate your trading game. Our platform empowers you to
                    find your unique advantage in the market.
                  </p>
                  <h5 style={{ color: "#ffb663" }} className=" fw-bold">
                    --------
                  </h5>
                </div>
                <div
                  className="m-0 text-white-50     ms-auto  col-6 align-content-center  mt-4  rounded  rounded-3      "
                  style={{
                    height: "80%",
                    width: "560px",
                  }}
                  ref={refC}
                >
                  <img
                    src={log1}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      opacity: "0.6",
                    }}
                  />
                </div>
              </div>
            </main>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            // speed={0.1}
            // factor={1}
            style={{
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // border: "1px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <main className="bg-black w-100  p-4 border-white h-75">
              <div
                className="m-0 text-white-50 d-md-flex   p-4 rounded  rounded-3 "
                style={{ height: "100%" }}
              >
                <div
                  className="m-0 text-white-50 ms-auto  col-md-6  col-sm-12 align-content-center  mt-4  rounded  rounded-3 d-none "
                  style={{
                    height: "80%",
                    width: "560px",
                  }}
                  ref={ref5}
                >
                  <h4 className=" fw-bold text-white   ">
                    Explore Our Wealth of Resources
                  </h4>
                  <p
                    className="   text-white-50   "
                    style={{ fontSize: "22px" }}
                  >
                    Elevate your trading with our curated content channels.{" "}
                    <br />
                    find valuable Books , Videos , Podcasts to fuel your
                    success. Unlock a world of knowledge at your fingertips.
                  </p>

                  <a href="/resources">
                    <button className="btn bg-light text-dark  xtra ">
                      <i class="fa-solid fa-location-arrow px-4  bulg"></i>
                    </button>
                  </a>
                </div>
                <div
                  className="m-0 text-white-50 ms-auto col-md-6 align-content-center  mt-4  rounded  rounded-3 ps-3 d-none "
                  style={{
                    height: "80%",
                    width: "560px",
                  }}
                  ref={ref4}
                >
                  <img
                    src={books}
                    alt=""
                    style={{
                      width: "100%",

                      opacity: "0.6",
                    }}
                  />
                </div>
              </div>
            </main>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3.9}
            // speed={0.7}
            // factor={1.6}
            style={{
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100px",
              // border: "1px solid white",
            }}
          >
            <footer className="bg-black ">
              <h6 className="m-0  p-2  text-white-50 text-center      ">
                A Product of D-Labs
              </h6>

              <h6 className="m-0  pb-2    text-white-50 text-center  ">
                © 2024 D-Labs Inc. All Rights Reserved.
              </h6>
            </footer>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Parallaxx;
