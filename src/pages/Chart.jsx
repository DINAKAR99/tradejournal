import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const Chart = () => {
  const [isClicked, setIsClicked] = useState(false);
  const newDivRef = useRef(null);

  ///form feilds
  const [week, setWeek] = useState(1);
  const [trades, setTrades] = useState(0);
  const [goal, setGoal] = useState(0);
  const [achived, setAchieved] = useState(0);
  const [percent, setPercent] = useState(0);
  const [data, setdata] = useState(false);
  //
  const handleClick = (index) => {
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/weeks/week${index}.json`
      )
      .then((res) => {
        setdata(false);
        if (res.data) {
          setdata(true);
        }
        console.log(res.data);
        setWeek(res.data.week);
        setTrades(res.data.trades);
        setGoal(res.data.goal);
        setAchieved(res.data.achieved);
        setPercent(res.data.percent);
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
    let percent = 70; // This can be any value
    let div = document.getElementById("box-1"); // Select the div
    if (div) {
      div.style.background = `linear-gradient(to right, #f0e68c ${percent}%, transparent ${percent}%)`;
    }
  }, []);
  useEffect(() => {
    if (isClicked && newDivRef.current) {
      newDivRef.current.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  }, [isClicked]);

  const submut = (e) => {
    e.preventDefault();

    const formData = {
      week,
      trades,
      goal,
      achived,
      percent,
    };
    axios.put(
      "https://trade-journal-ec0ce-default-rtdb.firebaseio.com/weeks/week1.json",
      formData
    );
    console.log("submitted");

    console.log(formData);
  };
  return (
    <div>
      <h2 className="text-center mt-3 banner ">Trade Challenge Weeks</h2>
      <div
        className="container shadow-lg challcont  mt-5 d-flex flex-wrap p-3    gap-3  rounded rounded-4 share "
        style={{ width: 1100 }}
      >
        {Array.from({ length: 54 }).map((_, index) => (
          <div
            key={index}
            id={`box-${index + 1}`}
            className="box border border-1 border-black rounded rounded-2 p-2 text-center "
            style={{ width: 90 }}
            onClick={() => handleClick(index + 1)}
          >
            {`week-${index + 1}`}
          </div>
        ))}
      </div>

      {true && (
        <div className="d-flex justify-content-center mt-5   ">
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div class="flip-card-inner rounded rounded-4">
              <div class="flip-card-front shadow-lg challcont p-3 rounded rounded-4 share">
                <div ref={newDivRef}>
                  <form>
                    <div className="weekReport">
                      <h4 className="ms-auto me-auto text-center">
                        WEEK-{week}
                      </h4>
                      <hr />
                      {data ? (
                        <>
                          <label>
                            Trades taken:
                            <input
                              className="form-control"
                              type="number"
                              placeholder={`${trades}`}
                              readOnly
                            />
                          </label>
                          <label>
                            Week Goal:
                            <input
                              className="form-control"
                              readOnly
                              type="number"
                              placeholder={`$${goal}`}
                            />
                          </label>
                          <label>
                            Achieved:
                            <input
                              className="form-control"
                              readOnly
                              type="number"
                              placeholder={`$${achived}`}
                            />
                          </label>
                          <label>
                            Overall percentage:
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
                      ) : (
                        <h2>No Existing Data</h2>
                      )}
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
                        defaultValue={9}
                        value={trades}
                        onChange={(e) => setTrades(e.target.value)}
                      />
                    </label>
                    <label>
                      Week Goal:
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={2000}
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                      />
                    </label>
                    <label>
                      Achieved:
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={2000}
                        value={achived}
                        onChange={(e) => setAchieved(e.target.value)}
                      />
                    </label>
                    <label>
                      Overall percentage:
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={14}
                        value={percent}
                        onChange={(e) => setPercent(e.target.value)}
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
  );
};
