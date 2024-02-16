import { Card, Container } from "react-bootstrap";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { TextError } from "./TextError";
import { add_trade } from "../actions/Actions";
import { connect } from "react-redux";
import { v4 } from "uuid";
import DisplayLogs from "./DisplayLogs";

const Logs = ({ add_trade }) => {
  useEffect(() => {
    document.title = "Trade logs";
  }, []);

  const initData = {
    coinName: "",
    TakeProfit: "",
    StopLoss: "",
    Notes: "",
    id: "",
  };

  const [data, setData] = useState(initData);

  const onSubmit = async (val, OnSubmitProps) => {
    add_trade({ ...val, id: v4() });
    const { coinName, TakeProfit, StopLoss, Notes } = val;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coinName, TakeProfit, StopLoss, Notes }),
    };

    const res = await fetch(
      "https://trade-journal-ec0ce-default-rtdb.firebaseio.com/logdata.json",
      options
    );
    console.log(res);
    if (res) {
      alert("posted");
    } else {
      alert("error occured");
    }
    console.log(val);

    OnSubmitProps.setSubmitting(false);
    OnSubmitProps.resetForm();
  };

  const validationkit = yup.object({
    coinName: yup.string().required("Required Field"),
    TakeProfit: yup.string().required("Required Field"),
    StopLoss: yup.string().required("Required Field"),
    Notes: yup.string().required("Required Field"),
  });

  return (
    <div>
      <h1>TRADE LOGS</h1>

      <Container>
        <Card>
          <Card.Body>
            <h3>ADD A TRADE LOG</h3>
            <Formik
              initialValues={initData}
              validationSchema={validationkit}
              onSubmit={onSubmit}
            >
              {(formik) => {
                // console.log("formik props", formik);

                return (
                  <Form>
                    <div className="form-control">
                      <label htmlFor="coinName">Stock</label>
                      <Field type="text" name="coinName" id="coinName" />
                      <ErrorMessage name="coinName" component={TextError} />
                    </div>
                    <div className="form-control">
                      <label htmlFor="TakeProfit">TakeProfit %</label>
                      <Field type="text" name="TakeProfit" id="TakeProfit" />
                      <ErrorMessage name="TakeProfit" component={TextError} />
                    </div>
                    <div className="form-control">
                      <label htmlFor="StopLoss">StopLoss %</label>
                      <Field type="text" name="StopLoss" id="StopLoss" />
                      <ErrorMessage name="StopLoss" component={TextError} />
                    </div>
                    <div className="form-control">
                      <label htmlFor="Notes">Notes</label>
                      <Field as="textarea" name="Notes" id="Notes" />
                      <ErrorMessage name="Notes" component={TextError} />
                    </div>

                    <button type="submit" disabled={formik.isSubmitting}>
                      Add Log
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </Card.Body>
        </Card>
      </Container>

      <DisplayLogs />
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  add_trade: (data) => dispatch(add_trade(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
