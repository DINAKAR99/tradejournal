import React, { useEffect, useState } from "react";

const Cinterest = () => {
  const [balance, setBalance] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [duration, setDuration] = useState(54);
  const [isYears, setIsYears] = useState(true); // Add useState for isYears
  const [comp, setComp] = useState("");

  useEffect(() => {
    document.title = "Compound Interest Calculator";
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
  return (
    <div className=" mb-0 px-3  ">
      <div className="container shadow-lg md-col-5 mt-5 rounded rounded-3     ">
        <div className="row p-3 ">
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
              <label className="mt-3  ">
                <input
                  type="radio"
                  name="durationType"
                  className="form-check-input "
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

            <button type="submit " className="mt-2 btn btn-dark    ">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="container shadow-lg md-col-5 mt-5 rounded rounded-3 ">
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

      <div className="container shadow-lg md-col-5 mt-5 rounded rounded-3 py-1 text-center    bg-success  share ">
        <button className="text-center text-white btn    ">
          {" "}
          share <i class="fa-solid fa-share-nodes"></i>
        </button>
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
                  <td>${Math.floor(balance + ciCalculator(index + 1))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cinterest;
