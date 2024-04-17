import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomNavBar } from "../components/CustomNavBar";
const Cinterest = () => {
  const [balance, setBalance] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isYears, setIsYears] = useState(true); // Add useState for isYears
  const [comp, setComp] = useState("");
  const middleRef = useRef(null);
  const nav = useNavigate();
  useEffect(() => {
    document.title = "Compound Interest Calculator";
    if (sessionStorage.getItem("usermail")) {
    } else {
      nav("/login");
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault(); // Convert the input values to numbers
    const principal = balance;
    const rate = interestRate / 100;
    const time = duration;

    // Calculate compound interest
    const compoundInterest = principal * Math.pow(1 + rate, time) - principal;

    console.log("Compound Interest: ", compoundInterest);
    setComp((s) => compoundInterest);
    //scroll into middle div
    middleRef.current.scrollIntoView({ behavior: "smooth" });
    // Scroll a little up
    window.scrollBy(0, 450);
  };

  const ciCalculator = (duration) => {
    const principal = balance;
    const rate = interestRate / 100;
    const time = duration;

    // Calculate compound interest
    const compoundInterest = principal * Math.pow(1 + rate, time) - principal;

    return compoundInterest;
  };
  const onlyInterest = (week) => {
    const interest = ciCalculator(week) - ciCalculator(week - 1);
    return interest;
  };

  window.onload = () => {
    var shareslist = document.getElementById("share");

    shareslist.addEventListener("click", function () {
      html2canvas(middleRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        // Now you can use imgData to share the image
        canvas.toBlob((blob) => {
          saveAs(blob, "CompoundInterest.png");
        });
      });
      console.log("shared");
      var phno = 9014556315;

      var message = encodeURIComponent("Check out the blog post: below ");

      var whatsappURL = "https://wa.me/" + phno + "?text=" + message;
      var twitterURL = "https://twitter.com/intent/tweet?text=" + message;
      var windowWidth = 500;
      var windowHeight = 500;

      // Calculate the center position for the new window
      var windowLeft = (window.innerWidth - windowWidth) / 2;
      var windowTop = (window.innerHeight - windowHeight) / 2;

      // Open a small window with the specified dimensions
      // window.open(
      //   twitterURL,
      //   "_blank",
      //   "width=" +
      //     windowWidth +
      //     ", height=" +
      //     windowHeight +
      //     ", left=" +
      //     windowLeft +
      //     ", top=" +
      //     windowTop
      // );
    });
  };

  return (
    <>
      <CustomNavBar />
      <div className=" mb-0 px-3  ">
        <div className="container shadow-lg md-col-5 mt-5 rounded rounded-3     ">
          <div className="row p-3 ">
            <form onSubmit={handleSubmit}>
              <h5>Balance </h5>

              <input
                type="number"
                step="1"
                className="form-control"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
              <h5 className="mt-3  ">Interest rate</h5>
              <input
                type="number"
                step="0.1"
                className="form-control"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />

              <h5 className="mt-3  ">Duration</h5>
              <div>
                <input
                  type="number"
                  step="1"
                  className="form-control"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <label className="mt-3  ">
                  <input
                    type="radio"
                    name="durationType"
                    className="form-check-input "
                    checked={isYears}
                    onChange={() => setIsYears(true)}
                  />
                  &nbsp; Weeks &nbsp;
                </label>
                {/* <label>
                <input
                  type="radio"
                  name="durationType"
                  className="form-check-input "
                  checked={!isYears}
                  onChange={() => setIsYears(false)}
                />
                Months
              </label> */}
              </div>

              <button type="submit " className="mt-2 btn btn-dark    ">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div
          className="container shadow-lg md-col-5 mt-5 rounded rounded-3 "
          id="middle"
          ref={middleRef}
        >
          <div className="text-center   p-3">
            Invest <b>${balance}</b> with interest rate <b>{interestRate}%</b>{" "}
            annual during <b>{duration}</b> years
          </div>
          <hr />
          <div className="text-center   p-3">
            <h4>End Balance</h4>
            <h4>${Math.floor(Number(comp) + Number(balance))}</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around ">
            <div className="text-center     p-3">
              <h6>contribution</h6>
              <h6>
                <b>${balance}</b>
              </h6>
            </div>
            <div className="text-center     p-3">
              {" "}
              <h6>Profit</h6>
              <h6>
                <b>${Math.floor(Number(comp))}</b>
              </h6>
            </div>
          </div>
        </div>

        <div
          className="container shadow-lg md-col-5 mt-5 rounded text-center text-white rounded-3 py-2 text-center    bg-success  share   "
          id="share"
          style={{ cursor: "pointer" }}
        >
          Download <i class="fa-solid fa-download "></i>
        </div>
        <div className="container shadow-lg md-col-5 mt-5     p-3   ">
          <table className="table    " bgcolor="green">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Time</th>
                <th scope="col">Interest</th>
                <th scope="col">End balance</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: duration }, (_, index) => {
                const year = index + 1;
                const interest = 1; // Replace with your interest calculation
                const endBalance = 1; // Replace with your end balance calculation

                return (
                  <tr key={year}>
                    <td>week {index + 1}</td>
                    <td>{year}</td>

                    <td>${onlyInterest(index + 1).toFixed(2)}</td>
                    <td>
                      $
                      {Math.floor(
                        Number(balance) + Number(ciCalculator(index + 1))
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default Cinterest;
