import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pie3D } from "react-pie3d";
import { CustomNavBar } from "../components/CustomNavBar";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
const MinuteTrades = () => {
  const [fecthedDemons, setFetchedDemons] = useState([]);
  const [fecthedDemonCount, setFecthedDemonCount] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);
  const [frequentDemons, setFrequentDemons] = useState([]);
  const [chartData, setchartData] = useState([]);
  const [newDemon, setNewDemon] = useState("");
  const [solution, setSolution] = useState("");
  const [demonCount, setDemonCount] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const config = {
    size: 0.5,
    showLabels: true,
    showLabelPercentage: true,
    textSize: 16,
    height: 0,
    angle: 90,
  };
  useEffect(() => {
    const modedmail = sessionStorage.getItem("modedmail");
    //fetch the demons  along with solution from db
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog.json`
      )
      .then((response) => {
        console.log(response.data);
        console.log();
        var raw = Object.entries(response.data);
        var piedata = raw.map(([char, count]) => ({
          value: count,
          label: char + " ",
        }));
        console.log("-------ss-");
        console.log(piedata);
        setchartData(piedata);

        // store them in the fetched demon array

        //and iterate them and like array[0].demon and array[0].solution
        // console.log(response.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("good");
    //close modal
    toggle();
  };

  useEffect(() => {
    const modedmail = sessionStorage.getItem("modedmail");
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog.json`
      )
      .then((res) => {
        console.log("--------");

        // const demons = res.data.map((each, index) => ({
        //   value: fecthedDemonCount[index]?.count || 1,
        //   label: each?.demon,
        // }));

        console.log(res);
        // setchartData(demons);

        console.log(res.data);
        // axios.put(
        //   `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/R.json`,
        //   res.data+1
        // );
      });
  });

  const tickChecker = () => {
    const selectBoxes = document.querySelectorAll(`input[type="checkbox"]`);

    selectBoxes.forEach((each) => {
      console.log(each.checked);
      if (!each.checked) {
        return true; // At least one select box is not selected
      }
    });
  };
  const submitTicks = () => {
    var jss = { user: "din" };
    console.log(jss);
    var js = JSON.stringify(jss);
    console.log(js);

    if (tickChecker) {
      //   alert("Please tick atleast one box");
    }
    //get all select boxes

    const modedmail = sessionStorage.getItem("modedmail");
    // fetch all ticks by ids
    // now check if they are checked
    // if validate.checked then fetch last count and add 1
    // and update the count on each category
    //
    //and next fetch the count of each cat and set to the pie
    if (document.getElementById("R").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/R.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/R.json`,
            res.data + 1
          );
        });
    }
    if (document.getElementById("E").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/E.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/E.json`,
            res.data + 1
          );
        });
    }
    if (document.getElementById("W").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/W.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/W.json`,
            res.data + 1
          );
        });
    }
    if (document.getElementById("T").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/T.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/T.json`,
            res.data + 1
          );
        });
    }
    if (document.getElementById("C").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/C.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/C.json`,
            res.data + 1
          );
        });
    }
    if (document.getElementById("S").checked) {
      axios
        .get(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/S.json`
        )
        .then((res) => {
          console.log("--------");
          console.log(res.data);
          axios.put(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/dailylog/S.json`,
            res.data + 1
          );
        });
    }
  };
  return (
    <div>
      <CustomNavBar />

      <Modal
        isOpen={modal}
        toggle={toggle}
        size="sm"
        centered
        backdrop="static"
      >
        <form onSubmit={handleSubmit}>
          <ModalBody className="text-center  ">
            {frequentDemons.map((obj, index) => (
              <div key={index}>
                <h4>
                  <b>8 times streak Demons</b>
                  <hr />
                </h4>
                <p>
                  <b>
                    {index + 1}&nbsp;. {obj.label}
                  </b>
                </p>
              </div>
            ))}
          </ModalBody>
          <ModalFooter className="d-flex  justify-content-center border-0   ">
            <div className="d-flex  ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              ></input>
              &nbsp; &nbsp;
              <p style={{ fontSize: 13 }}>
                I agree not to repeat these demons again
              </p>
            </div>
            <Button color="primary" type="submit" className="px-4 ">
              ok
            </Button>
          </ModalFooter>
        </form>
      </Modal>
      <div style={{ marginTop: 70 }}>
        <div className="d-md-flex   container-fluid  mt-5     ">
          <div
            className="  whites   col-md-6 mb-5  px-4      mt-3    rounded rounded-3 py-4"
            style={{
              minHeight: "500px",
              backgroundColor: "#fceed1",
            }}
          >
            <h4 className="bg-dark-subtle  mt-5 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
              1 Minute Trades log
            </h4>

            <h6></h6>

            <hr />
            <label htmlFor="">Tick the tasks</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="R"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                R
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="E"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                E
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="W"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                W
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="T"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                T
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="C"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                C
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="S"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                S
              </label>
            </div>

            <button className="btn btn-dark " onClick={submitTicks}>
              submit
            </button>
            <hr />
          </div>

          <div
            className="  whites   col-md-6 mb-5  px-4 mt-3  ms-2  rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#FFFFE0" }}
          >
            <h4 className="bg-dark-subtle text-danger   mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
              DEMONS WILL DESTROY YOUR EDGE
              <h6 className="bg-dark-subtle  text-uppercase  text-dark    mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
                Learn from your mistakes <br /> its the only way to achieve
                success <br />
                <br />
                eliminate your demons <br /> your future profitibility depends
                on it
              </h6>
            </h4>

            <h6 className="bg-dark-subtle p-4  py-5 mt-3 mx-3 mb-4   rounded rounded-2 py-2 ">
              RULES: <br />
              <br />
              1.increase demon count whenever you encounter one
              <br />
              <br />
              2.determine which demon is outpacing the rest Eliminate the demon
              as quick as possible <br />
              <br />
              2.If u suffer same demon 8 times in a row you should consider is
              trading really htmlFor you
            </h6>
          </div>
        </div>
      </div>
      <div className="border rounded p-3 shadow-lg bg-light-subtle mx-4 vh-100  drop-from-bottom  ">
        <h2>Daily Log Data</h2>
        <Pie3D config={config} data={chartData} />
      </div>
      <footer className="bg-black ">
        <h6 className="m-0  p-2  text-white-50 text-center      ">
          A Product of D-Labs
        </h6>

        <h6 className="m-0  pb-2    text-white-50 text-center  ">
          © 2024 D-Labs Inc. All Rights Reserved.
        </h6>
      </footer>
    </div>
  );
};

export default MinuteTrades;
