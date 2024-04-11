import React, { useState } from "react";

const Cinterest = () => {
  const [balance, setBalance] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [duration, setDuration] = useState(54);
  const [isYears, setIsYears] = useState(true); // Add useState for isYears
  const [comp, setComp] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Convert the input values to numbers
    const principal = balance;
    const rate = interestRate / 100;
    const time = duration;

    // Calculate compound interest
    const compoundInterest = principal * Math.pow(1 + rate, time) - principal;

    console.log("Compound Interest: ", compoundInterest);
    setComp((s) => compoundInterest);
  };
  return (
    <div className=" mb-0    ">
      <div className="container shadow-lg col-5 mt-5 rounded     ">
        <div className="row p-3">
          <form onSubmit={handleSubmit}>
            <h5>Balance </h5>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
            <h5>Interest rate</h5>
            <input
              type="number"
              step="0.01"
              className="form-control"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />

            <h5>Duration</h5>
            <div>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
              <label>
                <input
                  type="radio"
                  name="durationType"
                  className="form-check-input"
                  checked={isYears}
                  onChange={() => setIsYears(true)}
                />
                Years &nbsp;
              </label>
              <label>
                <input
                  type="radio"
                  name="durationType"
                  className="form-check-input "
                  checked={!isYears}
                  onChange={() => setIsYears(false)}
                />
                Months
              </label>
            </div>

            <button type="submit " className="mt-2  ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container shadow-lg col-5 mt-5 rounded ">
        <div className="text-center   p-3">
          Invest <b>{balance}</b> with interest rate <b>{interestRate}%</b>{" "}
          annual during <b>{duration}</b> year
        </div>
        <div className="text-center   p-3">
          <h4>End Balance</h4>
          <h4>{Math.floor(Number(comp) + Number(balance))}</h4>
        </div>

        <div className="d-flex justify-content-around ">
          <div className="text-center     p-3">
            <h6>contribution</h6>
            <h6>
              <b>{balance}</b>
            </h6>
          </div>
          <div className="text-center     p-3">
            {" "}
            <h6>Profit</h6>
            <h6>
              <b>{Math.floor(Number(comp))}</b>
            </h6>
          </div>
        </div>

        <div className="piechart">eefed</div>
      </div>

      <div className="container shadow-lg col-5 mt-5 rounded rounded-3 py-1   bg-success  share ">
        <h4 className="text-center text-white    ">share</h4>
      </div>
      <div className="container shadow-lg col-5 mt-5 rounded rounded-4 p-3   ">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cinterest;
