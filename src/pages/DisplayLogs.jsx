import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

import { connect } from "react-redux";

import { delete_trade, edit_trade } from "../actions/Actions";

const DisplayLogs = ({ pack, delete_trade }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3 shadow-sm">
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
