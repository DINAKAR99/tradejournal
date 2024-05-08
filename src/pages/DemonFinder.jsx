import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pie3D } from "react-pie3d";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CustomNavBar } from "../components/CustomNavBar";
const DemonFinder = () => {
  const [fecthedDemons, setFetchedDemons] = useState([]);
  const [fecthedDemonCount, setFecthedDemonCount] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);
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
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demons.json`
      )
      .then((response) => {
        let demonPack = [];
        console.log(demonCount);
        if (response.data == null) {
          console.log("no data");
          setDemonCount((e) => 0);
        } else {
          demonPack = response.data;
          demonPack = demonPack.filter((e) => e != null);
          console.log(demonPack.length);
          if (demonPack.length == 1) {
            setDemonCount((e) => demonPack.length);
          } else {
            setDemonCount((e) => demonPack.length + 1);
          }
          console.log(demonPack);
          console.log(demonCount);
          setFetchedDemons(demonPack);
        }

        //fetch demoncount form db
        axios
          .get(
            `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demonCount.json`
          )
          .then((response) => {
            if (response.data == null) {
            } else {
              setFecthedDemonCount((e) => response.data);
              console.log(demonPack);
              const sss = response.data;
              var fecthedDemonCount = sss;
              fecthedDemonCount = fecthedDemonCount.filter((e) => e != null);

              console.log(fecthedDemonCount);

              const demons = demonPack.map((each, index) => ({
                value: fecthedDemonCount[index]?.count || 1,
                label: each?.demon,
              }));

              console.log(demons);
              setchartData(demons);

              const filteredArray = demons.filter((obj) => obj.value % 8 === 0);

              console.log(filteredArray); // Output the filtered array

              if (filteredArray == []) {
                console.log(":dwudgwud");
                toggle();
              }
            }
          });
        //we get array of objects like {demon:"",solution:""}

        // store them in the fetched demon array

        //and iterate them and like array[0].demon and array[0].solution
        // console.log(response.data);
      });
  }, []);

  const saveNewDemon = () => {
    const modedmail = sessionStorage.getItem("modedmail");
    //save the new demon to db
    const confir = confirm("Are you sure you want to save this demon?");
    if (confir) {
      toast.loading("saving...");

      axios
        .put(
          `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demons/${demonCount}.json`,
          {
            demon: newDemon,
            solution: solution,
            demonId: demonCount,
          }
        )
        .then((response) => {
          console.log(response);
          setTimeout(() => {
            toast.remove();
            toast.success("demon saved successfully");
          }, 1000);

          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
    }
  };

  const increaseDemonCount = () => {
    const modedmail = sessionStorage.getItem("modedmail");
    console.log(selectedValue);
    toast.loading("saving...");
    let packager = { count: 1 };
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demonCount/${selectedValue}.json`
      )
      .then((response) => {
        if (response.data == null) {
          console.log(packager);
          //now push to db
          axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demonCount/${selectedValue}.json`,
              packager
            )
            .then((e) => {
              setTimeout(() => {
                toast.remove();
                toast.success("demon saved successfully");
              }, 1000);
            });
        } else {
          packager = {
            count: response.data.count + 1,
          };
          console.log(packager);

          //now push to db
          axios
            .put(
              `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/demonCount/${selectedValue}.json`,
              packager
            )
            .then((e) => {
              setTimeout(() => {
                toast.remove();
                toast.success("demon saved successfully");
              }, 1000);
            });
        }
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

      <Modal isOpen={modal} toggle={toggle} size="sm" centered>
        <ModalHeader toggle={toggle}> </ModalHeader>
        <ModalBody className="text-center  ">
          Are you sure you want to submit ?
        </ModalBody>
        <ModalFooter className="d-flex  justify-content-center border-0   ">
          <Button color="primary" className="px-4 ">
            yes
          </Button>{" "}
          <Button color="secondary" className="px-4  " onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>
      <div>
        <div className="d-md-flex   container-fluid  mt-5     ">
          <div
            className="  whites   col-md-6 mb-5  px-4      mt-3    rounded rounded-3 py-4"
            style={{ minHeight: "500px", backgroundColor: "#fceed1" }}
          >
            <h4 className="bg-dark-subtle  mt-3 mx-3 mb-4 text-center rounded rounded-2 py-2 ">
              Trader Demon Finder
            </h4>

            <h6></h6>
            <label htmlFor="">Select Demon</label>
            <select
              name=""
              id=""
              className="form-select  mt-2"
              onChange={(event) => {
                setSelectedValue(event.target.value);
                setNewDemon("");
                setSolution("");
              }}
            >
              <option value="" selected disabled>
                --select--
              </option>
              <option value="new">others</option>

              {fecthedDemons?.map((each) => (
                <option value={each.demonId}>{each.demon}</option>
              ))}
            </select>

            {selectedValue === "new" ? (
              <>
                <div className="maya">
                  <label htmlFor="" className="text-capitalize mt-3 naya  ">
                    new demon
                  </label>
                  <input
                    className="form-control mt-2"
                    type="text"
                    value={newDemon}
                    onChange={(event) => setNewDemon(event.target.value)}
                  />
                </div>
                <div className="sol">
                  <label htmlFor="" className="text-capitalize mt-3 naya  ">
                    solution
                  </label>
                  <input
                    className="form-control mt-2"
                    type="text"
                    value={solution}
                    onChange={(event) => setSolution(event.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary form-control mt-5"
                  onClick={saveNewDemon}
                >
                  save
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary form-control mt-5"
                onClick={increaseDemonCount}
              >
                Increase Demon Count
              </button>
            )}
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
              trading really for you
            </h6>
          </div>
        </div>
      </div>
      <div className="border rounded p-3 shadow-lg bg-light-subtle mx-4 vh-100  drop-from-bottom  ">
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

export default DemonFinder;
