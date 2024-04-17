import React, { useEffect } from "react";
import bruce from "../images/bruce.jpg";
import { CustomNavBar } from "../components/CustomNavBar";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const nav = useNavigate();
  useEffect(() => {
    document.title = "Rules";
    if (sessionStorage.getItem("usermail")) {
    } else {
      nav("/login");
    }
  });
  return (
    <>
      <CustomNavBar />
      <div>
        <h4 className="bg-dark-subtle  mt-3 mx-3 text-center rounded rounded-2 py-2 ">
          Rules to Follow
        </h4>
        <div className="d-md-flex   container-fluid       ">
          <div
            className="  whites   col-md-6 mb-5  px-4      mt-3    rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#fceed1" }}
          >
            <pre className="text-wrap  ">
              1.Check h1 , h30, h4 before deciding long or short only go if
              trend allows else rekt <br /> <b>exception:</b> at 200 ema can
              long above or short below <br />
              <br />
              2.After a long draw down dont short rather look for longs it
              doesnt work shorting
              <br />
              <br /> 3.Define Levels more accurately so that we can cut loosers
              easily And have patience till they reach that levels
              <br />
              <br /> 4.Dont execute trade at a random place , just only at the
              near resistance like ema or at s/r else sl can get hit easily, if
              done correctly we can cut loser small <br />
              <br />
              5.Only trade if emas near or confluenced with support or
              resistance
              <br />
              <br />
              6.If got more than 1.5 % in a day try to save it dont give to
              market simply
              <br />
              <br />
              7.Weekly 6% until next 2 years:
              <br /> keep it simple <br /> Keep it simple <br /> Keep it simple{" "}
              <br /> Keep it simple <br /> Keep it simple <br /> Keep it simple{" "}
              <br /> Have one or two lines to rule the chart
              <br />
              <br />
              <h5>Lets go ...</h5>
            </pre>
          </div>

          <div
            className="  whites   col-md-6 mb-5  px-4 mt-3  ms-2  rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#FFFFE0" }}
          >
            <img
              src={bruce}
              className="rounded rounded-3"
              alt=""
              style={{ backgroundSize: "contain", width: "100%" }}
            />
          </div>
        </div>
      </div>{" "}
      <footer className="bg-black   ">
        <h6 className="m-0  pb-2    text-white-50 text-center   ">
          {" "}
          A Product of D-Labs
        </h6>
      </footer>
    </>
  );
};

export default Rules;
