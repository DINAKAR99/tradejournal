import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { CustomNavBar } from "../components/CustomNavBar";
import { useNavigate } from "react-router-dom";

export const Chart = () => {
  const [isClicked, setIsClicked] = useState(false);
  const newDivRef = useRef(null);

  ///form feilds
  const [week, setWeek] = useState(0);
  const [trades, setTrades] = useState(0);
  const [goal, setGoal] = useState(0);
  const [achived, setAchieved] = useState(0);
  const [percent, setPercent] = useState(0);

  const nav = useNavigate();
  //
  const handleClick = (index) => {
    const modedmail = sessionStorage.getItem("modedmail");
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/weeks/week${index}.json`
      )
      .then((res) => {
        if (res.data == null) {
          setWeek(index);
          setTrades(0);
          setGoal(0);
          setAchieved(0);
          setPercent(0);
        } else {
          console.log(res.data);
          setWeek(index);

          setTrades(res.data.trades);
          setGoal(res.data.goal);
          setAchieved(res.data.achived);
          setPercent(res.data.percent);
        }
      });
    setWeek(index);
    setIsClicked(true);
  };
  const [isFlipped, setIsFlipped] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    document.title = "Trade challenges";
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (sessionStorage.getItem("usermail")) {
    } else {
      nav("/login");
    }
  }, []);
  useEffect(() => {
    const modedmail = sessionStorage.getItem("modedmail");
    axios
      .get(
        ` https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/weeks.json`
      )
      .then((response) => {
        const pack = [];
        if (response.data !== null) {
          pack = Object.values(response.data);
          pack.forEach((element) => {
            const box = document.getElementById(`box-${element.week}`);

            if (box) {
              if (element.percent < 25) {
                box.style.background = `linear-gradient(to right, #CE0000 ${element.percent}%, transparent ${element.percent}%)`;
              } else if (element.percent > 25 && element.percent < 50) {
                box.style.background = `linear-gradient(to right, #FCEF2A ${element.percent}%, transparent ${element.percent}%)`;
              } else if (
                (element.percent > 50 && element.percent <= 100) ||
                element.percent > 100
              ) {
                box.style.background = `linear-gradient(to right, #2E8124 ${element.percent}%, transparent ${element.percent}%)`;
              } else {
                box.style.background = `linear-gradient(to right, #2E8124 ${element.percent}%, transparent ${element.percent}%)`;
              }
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useEffect(() => {
    if (isClicked && newDivRef.current) {
      newDivRef.current.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  }, [isClicked]);

  const submut = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
    toast.success("Saved Successfully");
    const modedmail = sessionStorage.getItem("modedmail");
    const formData = {
      week,
      trades,
      goal,
      achived,
      percent,
    };

    axios
      .put(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/weeks/week${week}.json`,
        formData
      )
      .then(() => window.location.reload());
    console.log("submitted");
  };
  return (
    <>
      <CustomNavBar />
      <div className="mx-5 ">
        <h2
          className="  p-3  mt-3       rounded rounded-3 mb-3  text-center   "
          id="first"
        >
          Weeks &nbsp;
          <div className=" d-inline   ">
            <i
              className="fa-solid fa-circle-info fa-sm"
              title="Each box represents a trade week progress , click on it to view or edit the details."
              style={{
                position: "absolute",
                bottom: 380,
                right: 1040,
              }}
            ></i>
          </div>
        </h2>

        <div
          className="container-fluid   shadow-lg challcont   mt-5 d-flex flex-wrap p-5   justify-content-between       gap-3  rounded rounded-4 share "
          style={{ maxWidth: "900px" }}
        >
          {Array.from({ length: 55 }).map((_, index) => (
            <div
              key={index}
              id={`box-${index + 1}`}
              className="box border border-2 border-black rounded rounded-2 p-2 text-center "
              onClick={() => handleClick(index + 1)}
            >
              {`week-${index + 1}`}
            </div>
          ))}
        </div>

        {true && (
          <div className="d-flex justify-content-center mt-5 mb-5    ">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
              <div className="flip-card-inner rounded rounded-4">
                <div className="flip-card-front shadow-lg challcont p-3 rounded rounded-4 share">
                  <div ref={newDivRef}>
                    <form>
                      <div className="weekReport">
                        <h4 className="ms-auto me-auto text-center">
                          WEEK-{week}
                        </h4>
                        <hr />
                        <>
                          <label>
                            Trades taken
                            <input
                              className="form-control"
                              type="number"
                              placeholder={`${trades}`}
                              readOnly
                            />
                          </label>
                          <label>
                            Week Goal
                            <input
                              className="form-control"
                              readOnly
                              type="number"
                              placeholder={`$${goal}`}
                            />
                          </label>
                          <label>
                            Achieved
                            <input
                              className="form-control"
                              readOnly
                              type="number"
                              placeholder={`$${achived}`}
                            />
                          </label>
                          <label>
                            Overall percentage
                            <input
                              className="form-control"
                              readOnly
                              type="number"
                              placeholder={`${percent} %`}
                            />
                          </label>
                          <div>
                            <button
                              className=" ms-2  btn btn-dark mt-4"
                              onClick={handleEditClick}
                            >
                              Edit
                            </button>
                          </div>
                        </>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flip-card-back shadow-lg challcont p-3 rounded rounded-4 share">
                  <form onSubmit={submut}>
                    <div className="weekReport">
                      <h4 className="ms-auto me-auto text-center">WEEK-1</h4>
                      <hr />
                      <label>
                        Trades taken:
                        <input
                          className="form-control"
                          type="number"
                          value={trades}
                          onChange={(e) => setTrades(e.target.value)}
                        />
                      </label>
                      <label>
                        Week Goal: $
                        <input
                          className="form-control"
                          type="number"
                          value={goal}
                          onChange={(e) => {
                            setGoal(e.target.value);
                            setPercent((achived / e.target.value) * 100);
                          }}
                        />
                      </label>
                      <label>
                        Achieved: $
                        <input
                          className="form-control"
                          type="number"
                          value={achived}
                          onChange={(e) => {
                            setPercent((e.target.value / goal) * 100);
                            setAchieved(e.target.value);
                          }}
                        />
                      </label>
                      <label>
                        Overall percentage:
                        <input
                          className="form-control"
                          type="number"
                          value={percent}
                          onChange={(e) => {}}
                        />
                      </label>
                      <div>
                        <button className="btn btn-dark mt-4" type="submit ">
                          Save
                        </button>
                        <button
                          className=" ms-2  btn btn-dark mt-4"
                          onClick={handleEditClick}
                        >
                          Cancle
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
