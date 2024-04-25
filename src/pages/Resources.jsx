import React, { useEffect } from "react";
import Slider from "react-slick";
import { Tweet } from "react-tweet";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CustomNavBar } from "../components/CustomNavBar";
import books from "../images/booksr.png";
import btc from "../images/btc.png";
import podcast from "../images/podcast.png";
import tv from "../images/tv.png";
const Resources = () => {
  useEffect(() => {
    document.title = "Resources";
  });
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <CustomNavBar />
      {/* button to go up */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "100",
        }}
        className="bg-transparent btn text-white  "
      >
        <i class="fa-regular fa-circle-up fa-xl"></i>
      </button>

      {/* foirst div */}
      <main
        className="bg-black w-100  p-4 border-white  vh-100 "
        style={{ marginTop: "56px" }}
      >
        <div
          className="m-0 text-white-50     d-md-flex p-4 rounded  rounded-3 "
          style={{ height: "500px" }}
        >
          <div
            className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
            style={{
              width: "560px",
            }}
          >
            <h1>Resources</h1>
            <hr />
            <p className=" text-white-50 " style={{ fontSize: "25px" }}>
              <front className="text-white ">
                Pick the type of resource you like
              </front>
              <br />
              <button
                className="btn   text-dark mt-3 text-white-50 buttonHov bulg2 accordion "
                onClick={() => {
                  document
                    .getElementById("tg")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Telegram Groups
              </button>
              <br />
              <button
                className="btn  buttonHov bulg2 mt-3 text-white-50     "
                onClick={() => {
                  document
                    .getElementById("twitter")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Twitter Accounts
              </button>
              <br />
              <button
                className="btn  buttonHov bulg2 mt-3 text-white-50"
                onClick={() =>
                  document
                    .getElementById("books")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Books
              </button>
              <br />
              <button
                className="btn  buttonHov bulg2 mt-3 text-white-50 "
                onClick={() =>
                  document
                    .getElementById("videos")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Videos
              </button>
              <br />
              <button
                className="btn  buttonHov bulg2 mt-3 text-white-50 "
                onClick={() =>
                  document
                    .getElementById("indicators")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Indicators
              </button>
              <br />
              <button
                className="btn  buttonHov bulg2 mt-3 text-white-50 "
                onClick={() =>
                  document
                    .getElementById("podcasts")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Podcasts
              </button>
            </p>
          </div>
          <div
            className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-4  rounded  rounded-3  mt-auto        "
            style={{
              height: "80%",
              width: "560px",
              //   backgroundColor: "#222222",
            }}
          >
            <img
              src={btc}
              alt=""
              style={{
                height: "250px",
                width: "560px",

                opacity: "0.6",
              }}
            />
          </div>
        </div>
      </main>

      {/* second div */}
      <main className="pt-5 bg-black" id="tg">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Telegram Groups</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">
                  Fine tuned List of Telegram groups
                </front>
                <br />
                <button className="btn   text-dark mt-3 text-white-50 ">
                  •{" "}
                  <span className=" buttonHov bulg2">Rose Crypto Signals</span>
                </button>
                <br />
                <button className="btn  mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Crypto Notes</span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">TraderSZ TA</span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Koroush AK</span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Innit for The Tech</span>
                </button>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty      rounded  rounded-3 border mt-auto   pt-2           "
              style={{
                height: "80%",
                width: "560px",
                backgroundColor: "#222222",
              }}
            >
              <div>
                <Slider {...settings}>
                  <iframe
                    width="560px"
                    height="350px"
                    src="https://www.youtube.com/embed/SR8755C0bME?si=CnmOVBbeS6O8jUIH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    width="560px"
                    height="350px"
                    src="https://www.youtube.com/embed/SR8755C0bME?si=CnmOVBbeS6O8jUIH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    width="560px"
                    height="350px"
                    src="https://www.youtube.com/embed/SR8755C0bME?si=CnmOVBbeS6O8jUIH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                  <iframe
                    width="560px"
                    height="350px"
                    src="https://www.youtube.com/embed/SR8755C0bME?si=CnmOVBbeS6O8jUIH"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </Slider>
              </div>
            </div>
          </div>
        </main>
      </main>
      {/* third div */}
      <main className="pt-5 bg-black" id="twitter">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Twitter Accounts</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">
                  Fine tuned List of Telegram groups
                </front>
                <br />
                <button className="btn   text-dark mt-3 text-white-50 ">
                  •{" "}
                  <span className=" buttonHov bulg2">Rose Crypto Signals</span>
                </button>
                <br />
                <button className="btn      mt-3 text-white-50 ">
                  • <span className=" buttonHov bulg2">Crypto Notes</span>
                </button>
                <br />
                <button className="btn      mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2"> TraderSZ TA</span>
                </button>
                <br />
                <button className="btn mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Koroush AK</span>
                </button>
                <br />
                <button className="btn mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Innit for The Tech</span>
                </button>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-auto  rounded  rounded-3       "
              style={{
                height: "80%",
                width: "560px",
              }}
            >
              <div>
                <Slider {...settings}>
                  <Tweet id="1778831959969366211" />
                  <Tweet id="1781573637444710460" />
                  <Tweet id="1778879422679896203" />
                  <Tweet id="1779479771468140996" />
                </Slider>
              </div>
            </div>
          </div>
        </main>
      </main>
      {/* forth div */}
      <main className="pt-5 bg-black" id="books">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Books</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">Must-read list</front>
                <br />
                <button className="btn   text-dark mt-3 text-white-50          ">
                  •{" "}
                  <span className=" buttonHov bulg2">Trading in the zone </span>
                </button>
                <br />
                <button className="btn      mt-3 text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    The Desciplined Trader - by Mark Douglas
                  </span>
                </button>
                <br />
                <button className="btn      mt-3 text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    {" "}
                    Our Power to predict
                  </span>
                </button>
                <br />
                <h6
                  className=" mt-5 text-white-50 ms-2 "
                  style={{ cursor: "default" }}
                >
                  Stay tuned for more ...
                </h6>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-4  rounded  rounded-3 ps-3      "
              style={{
                height: "80%",
                width: "560px",
              }}
            >
              <img
                src={books}
                alt=""
                style={{
                  height: "100%",
                  opacity: "0.6",
                }}
              />
            </div>
          </div>
        </main>
      </main>
      {/* fifth div */}
      <main className="pt-5 bg-black" id="videos">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Videos</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">Vault of Top-notch Videos</front>
                <br />
                <button className="btn   text-dark mt-3 text-white-50 ">
                  • &nbsp;
                  <span className=" buttonHov bulg2">
                    Trader xo weekly review
                  </span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Crypto Cred</span>
                </button>
                <br />
                <button className="btn   mt-3 text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">The Trading Channel</span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Crypto Notes</span>
                </button>
                <br />
                <button className="btn   mt-3 text-white-50     ">
                  • <span className=" buttonHov bulg2">Trader dante *</span>
                </button>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-4  rounded  rounded-3  border p-1 pt-2               "
              style={{
                height: "80%",
                width: "560px",
                backgroundColor: "#222222",
              }}
            >
              <Slider {...settings}>
                <iframe
                  width="560px"
                  height="350px"
                  src="https://www.youtube-nocookie.com/embed/izi-Rre47xo?si=o6d9iE422Rv2YZoQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560px"
                  height="350px"
                  src="https://www.youtube-nocookie.com/embed/jmtzRaftd68?si=QhF3CicyiZhBjSTi"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560px"
                  height="350px"
                  src="https://www.youtube-nocookie.com/embed/Vy1_URi88eE?si=f9YlYD4XQJzXPxib"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="560px"
                  height="350px"
                  src="https://www.youtube-nocookie.com/embed/jUTKg5SiSZ0?si=fFY_VfjeLrt98rtR"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Slider>
            </div>
          </div>
        </main>
      </main>
      {/* six div */}
      <main className="pt-5 bg-black" id="indicators">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Indicators</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">
                  Simple yet Most Useful Indicators
                </front>
                <br />
                <button className="btn text-dark mt-3 text-white-50        ">
                  • <span className=" buttonHov bulg2">4 ema combo</span>
                </button>
                <br />
                <p style={{ fontSize: "12px" }} className="ms-4 ">
                  combination of ema 21 25 50 200
                </p>
                <button className="btn     text-white-50     ">
                  • <span className=" buttonHov bulg2">levels by din</span>
                </button>
                <br />{" "}
                <p style={{ fontSize: "12px" }} className="ms-4 ">
                  daily , weekly , monthly open lines
                </p>
                <button className="btn      text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    yearly monthly vertical lines
                  </span>
                </button>{" "}
                <p style={{ fontSize: "12px" }} className="ms-4 ">
                  vertical lines for yearly and monthly start
                </p>
                <button className="btn     text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    Trader Xo macro trend scanner
                  </span>
                </button>
                <p style={{ fontSize: "12px" }} className="ms-4 ">
                  combination of ema 21 25 for short momentum
                </p>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-4  rounded  rounded-3 ps-3      "
              style={{
                height: "80%",
                width: "560px",
                //   backgroundColor: "#222222",
              }}
            >
              <img
                src={tv}
                alt=""
                style={{
                  height: "250px",
                  width: "560px",
                  opacity: "0.6",
                }}
              />
            </div>
          </div>
        </main>
      </main>
      {/* seventh div */}
      <main className="pt-5 bg-black" id="podcasts">
        <main className="bg-black w-100  p-4 border-white  vh-100 ">
          <div
            className="m-0 text-white-50 border   d-md-flex p-4 rounded  rounded-3 "
            style={{ height: "500px" }}
          >
            <div
              className="m-0 text-white-50 ms-auto  col-md-6 align-content-center lefty      mt-4  rounded  rounded-3 ps-3      "
              style={{
                width: "560px",
              }}
            >
              <h1>Podcasts</h1>
              <hr />
              <p className=" text-white-50 " style={{ fontSize: "25px" }}>
                <front className="text-white ">some of the best podcasts</front>
                <br />
                <button className="btn   text-dark mt-3 text-white-50        ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    skill sets for profitability with trader dante
                  </span>
                </button>
                <br />
                <button className="btn    mt-3 text-white-50     ">
                  •{" "}
                  <span className=" buttonHov bulg2">
                    How He Made $100,000,000 in 2 years
                  </span>
                </button>
                <br />
              </p>
            </div>
            <div
              className="m-0 text-white-50      ms-auto  col-md-6 align-content-center righty    mt-4  rounded  rounded-3 ps-3      "
              style={{
                height: "80%",
                width: "560px",
                //   backgroundColor: "#222222",
              }}
            >
              <img
                src={podcast}
                alt=""
                style={{
                  height: "100%",
                  opacity: "0.6",
                }}
              />
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default Resources;
