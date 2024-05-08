import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CustomNavBar } from "../components/CustomNavBar";
import Chart from "react-google-charts";
import { format } from "date-fns/format";

const Dailyupdate = () => {
  const [fetchedCategories, setFetchedCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const modedmail = sessionStorage.getItem("modedmail");
    //categroy setter
    // axios.put(
    //   `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/update/hibernate.json`,
    //   { log: "samplee" }
    // );

    //get categrories
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/update.json`
      )
      .then((res) => {
        console.log(Object.keys(res.data));
        setFetchedCategories((e) => Object.keys(res.data));
      });
  }, []);

  const saveDailyUpdate = () => {
    console.log(message);
    const date = new Date();
    const formattedDate = format(date, "dd-MM-yyyy");
    console.log(formattedDate);
    toast.loading("saving daily update");
    //save to db
    axios
      .put(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/update/${category}/${formattedDate}.json`,
        {
          log: message,
        }
      )
      .then((e) => {
        setTimeout(() => {
          toast.remove();
          toast.success("daily update saved successfully");
        }, 1000);
      });
  };

  const options = {
    title: "My Demons",
    is3D: true,
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  return (
    <div>
      <CustomNavBar />
      <div>
        <div className="d-md-flex   container-fluid  mt-5     ">
          <div
            className="  whites   col-md-6 mb-5  px-4      mt-3    rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#fceed1" }}
          >
            <h4 className="bg-dark-subtle  mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
              Daily update
            </h4>

            <h6></h6>
            <label htmlFor="">Select category</label>
            <select
              name=""
              id=""
              className="form-select  mt-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected disabled>
                --select--
              </option>
              <option value="new">others</option>

              {fetchedCategories?.map((each) => (
                <option value={each}>{each}</option>
              ))}
            </select>

            <div className="maya">
              <label htmlFor="" className="text-capitalize mt-3 naya  ">
                daily update
              </label>
              <textarea
                rows={8}
                className="form-control mt-2"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <button
              className="btn btn-primary form-control mt-5"
              onClick={saveDailyUpdate}
            >
              save
            </button>
          </div>

          <div
            className="  whites   col-md-6 mb-5  px-4 mt-3  ms-2  rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#FFFFE0" }}
          >
            <h4 className="bg-dark-subtle text-danger   mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
              +++++++++++++++++++++++
              <h6 className="bg-dark-subtle  text-uppercase  text-dark    mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
                +++++++++++++++++++++++
                <br />
                <br />
                +++++++++++++++++++++++
              </h6>
            </h4>

            <h6 className="bg-dark-subtle p-4  py-5 mt-3 mx-3 mb-4   rounded rounded-2 py-2 ">
              RULES: <br />
              <br />
              +++++++++++++++++++++++
            </h6>
          </div>
        </div>
      </div>
      <div className="border rounded p-3 shadow-lg bg-light-subtle mx-4  ">
        {/* <Chart
          chartType="PieChart"
          data={chartData && chartData}
          options={options}
          width={"100%"}
          height={"400px"}
        /> */}
      </div>
      <footer className="bg-black ">
        <h6 className="m-0  p-2  text-white-50 text-center      ">
          A Product of D-Labs
        </h6>

        <h6 className="m-0  pb-2    text-white-50 text-center  ">
          © 2024 D-Labs Inc. All Rights Reserved
        </h6>
      </footer>
    </div>
  );
};

export default Dailyupdate;
