import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { add_trade } from "../actions/Actions";
import DisplayLogs from "./DisplayLogs";
import toast from "react-hot-toast";
const Logs = ({ add_trade }) => {
  const [pack, setPack] = useState([]);
  const [p, setp] = useState(false);
  const [coinName, setCoinName] = useState("");
  const [TakeProfit, setTakeProfit] = useState("");
  const [Stoploss, setStoploss] = useState("");
  const [notes, setNotes] = useState("");
  useEffect(() => {
    document.title = "Trade logs";
    axios
      .get(
        "https://trade-journal-ec0ce-default-rtdb.firebaseio.com/logdata.json"
      )
      .then((res) => {
        setPack((pack) => Object.values(res.data));
      }, []);
  });
  function generateRandomId() {
    return Math.floor(Math.random() * Date.now()).toString();
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Convert the input values to numbers
    const initData = {
      coinName: coinName,
      TakeProfit: TakeProfit,
      StopLoss: Stoploss,
      Notes: notes,
      date: new Date().toLocaleDateString(),
      id: generateRandomId(),
    };
    toast.success("trade logged successfully");

    axios
      .put(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/logdata/log-${initData.id}.json`,
        initData
      )
      .then(() => window.location.reload());

    setp((p) => !p);

    console.log(initData);
  };

  return (
    <div>
      <h2 className="text-center  mt-2">TRADE LOGS</h2>
      <div className="p-5 pt-2  ">
        <h3 className=" mb-3  "> New Log </h3>
        <div
          className=" shadow-lg  mb-3 p-0 rounded rounded-3 "
          style={{ backgroundColor: "#8B9EB7" }}
        >
          <div className="row p-3">
            <form onSubmit={handleSubmit}>
              <h5>Coin-Name </h5>
              <input
                type="text"
                className="form-control mb-2 "
                value={coinName}
                onChange={(e) => setCoinName(e.target.value)}
                placeholder="Enter Coin Name  "
              ></input>
              <h5>Take Profit %</h5>
              <input
                type="number"
                step="0.01"
                className="form-control mb-2 "
                value={TakeProfit}
                placeholder="Enter TakeProfit %"
                onChange={(e) => setTakeProfit(e.target.value)}
              />

              <h5>Stop Loss %</h5>
              <div>
                <input
                  type="number"
                  step="0.01"
                  className="form-control mb-2 "
                  value={Stoploss}
                  placeholder="Enter StopLoss %"
                  onChange={(e) => setStoploss(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <h5>Notes</h5>
                <textarea
                  rows="4"
                  className="form-control"
                  value={notes}
                  placeholder="enter some notes...  "
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <button type="submit " className="mt-3 btn btn-dark      ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <DisplayLogs />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  add_trade: (data) => dispatch(add_trade(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
