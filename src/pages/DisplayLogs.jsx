import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

import axios from "axios";
import { connect } from "react-redux";

import { delete_trade, edit_trade } from "../actions/Actions";
import { CustomNavBar } from "../components/CustomNavBar";
import { useNavigate } from "react-router-dom";

const DisplayLogs = ({ delete_trade }) => {
  const [pack, setPack] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(1);
  useEffect(() => {
    document.title = "Trade logs";
    const modedmail = sessionStorage.getItem("modedmail");
    axios
      .get(
        `https://trade-journal-ec0ce-default-rtdb.firebaseio.com/${modedmail}/logdata.json`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data !== null) {
          setPack((pack) => Object.values(res.data));
          console.log(pack);
        }
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);
  function handleSelectChange(event) {
    const weekNumber = event.target.value;
    setSelectedWeek(Number(event.target.value));
    console.log(`Selected week: ${weekNumber}`);
  }
  function getWeekNumber(date) {
    const tempDate = new Date(date);
    const firstDayOfYear = new Date(tempDate.getFullYear(), 0, 1);
    const pastDaysOfYear = (tempDate - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  return (
    <>
      <Container className="mt-5 rounded rounded-2 mb-5  ">
        <Row>
          <Col>
            <Card className="mt-3 shadow-sm mb-5">
              <Card.Body>
                <h3 className="text-center  "> log history</h3>
                <span>
                  <h6 className="text-center  ">search by week </h6>
                  <div
                    className=" d-flex justify-content-center container-fluid my-3      "
                    style={{ width: "300px" }}
                  >
                    <select
                      className="form-select shadow-lg border border-2 border-dark  "
                      onChange={handleSelectChange}
                    >
                      {Array.from({ length: 54 }, (_, index) => (
                        <option key={index} value={index + 1}>
                          Week {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <h4 className="  bg-info-subtle p-3  rounded rounded-3 mb-3  ">
                    Showing logs for week - {selectedWeek}{" "}
                  </h4>
                </span>
                {/* <DisplayCount /> */}
                <ListGroup>
                  {pack
                    .filter((item) => getWeekNumber(item.date) === selectedWeek)

                    .map((item, index) => (
                      <ListGroup.Item
                        key={index}
                        className="mb-3 border  border-3 shadow-lg  rounded rounded-3  "
                      >
                        <h4>
                          {index + 1}. Coin - {item.coinName} || {item.date}
                        </h4>
                        <p>
                          This trade was made in week {getWeekNumber(item.date)}
                          .
                        </p>
                        <p>TP - {item.TakeProfit}</p>
                        <p>SL - {item.StopLoss}</p>
                        <p>NOTES - {item.Notes}</p>
                        <p>Id - {item.id}</p>

                        <Button
                          onClick={(e) => delete_trade(item.id)}
                          variant="danger"
                          size="sm"
                          className="mb-3"
                        >
                          Delete
                        </Button>

                        {/* <EditableText state1={todo} Id={todo.id} /> */}
                      </ListGroup.Item>
                    ))}
                  {pack.filter(
                    (item) => getWeekNumber(item.date) === selectedWeek
                  ).length === 0 && <h5>No data found for this week </h5>}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { pack: state.journalEngine };
};
const mapDispatchToProps = (dispatch) => ({
  delete_trade: (id) => dispatch(delete_trade(id)),
  edit_trade: (data, id) => dispatch(edit_trade(data, id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DisplayLogs);
