import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

import { connect } from "react-redux";
import axios from "axios";

import { delete_trade, edit_trade } from "../actions/Actions";

const DisplayLogs = ({ delete_trade }) => {
  const [pack, setPack] = useState([]);
  useEffect(() => {
    document.title = "Trade logs";
    axios
      .get(
        "https://trade-journal-ec0ce-default-rtdb.firebaseio.com/logdata.json"
      )
      .then((res) => {
        setPack((pack) => Object.values(res.data));
        console.log(pack);
      });
  }, []);
  console.log(pack);
  return (
    <Container className="mt-5  ">
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm mb-5">
            <Card.Body>
              <h3> log history</h3>
              {/* <DisplayCount /> */}
              <ListGroup>
                {pack.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <h4>
                      Stock - {item.coinName} || Date -
                      {new Date().toLocaleDateString()} -
                      {new Date().toLocaleTimeString()}
                    </h4>
                    <p>TP - {item.TakeProfit}</p>
                    <p>SL - {item.StopLoss}</p>
                    <p>NOTES - {item.Notes}</p>
                    <p>{item.id}</p>

                    <Button
                      onClick={(e) => delete_trade(item.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>

                    {/* <EditableText state1={todo} Id={todo.id} /> */}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
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
