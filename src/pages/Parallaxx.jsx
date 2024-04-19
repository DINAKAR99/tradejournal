import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef, useState } from "react";
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
import black from "../images/black.jpg";
import { CustomNavBar } from "../components/CustomNavBar";
import Footer from "./Footer";

const Parallaxx = () => {
  const ref = useRef();
  const text = " J o u r n a l - X ".split(" ");
  const text2 = "welcome  to ".split(" ");

  const [showComponent, setShowComponent] = useState(false);

  // const checkScroll = () => {
  //   console.log("yvyv");
  //   if (!showComponent && window.scrollY > 10) {
  //     console.log("yvyv");
  //     setShowComponent(true);
  //   }
  // };

  // window.addEventListener("scroll", checkScroll());
  useEffect(() => {
    const checkScroll = () => {
      console.log("yvyv");
      if (!showComponent && window.scrollY > 10) {
        console.log("yvyv");
        setShowComponent(true);
      }
    };

    window.addEventListener("scroll", checkScroll);

    // Don't forget to remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [showComponent]);
  return (
    <div>
      <CustomNavBar />
      <div>
        <Parallax pages={2} ref={ref}>
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

          {showComponent ? (
            <ParallaxLayer
              offset={1}
              speed={0.7}
              factor={1.6}
              style={{
                backgroundImage: `url(${black})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <footer className="bg-black ">
                <h6 className="m-0  p-2  text-white-50 text-center      ">
                  A Place to Log your trades
                </h6>
              </footer>
            </ParallaxLayer>
          ) : (
            <></>
          )}
          <ParallaxLayer
            offset={1.85}
            speed={0.7}
            factor={1.6}
            style={{
              backgroundImage: `url(${black})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100px",
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
