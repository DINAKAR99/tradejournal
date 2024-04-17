import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { TextError } from "./TextError";
import { Button, Modal } from "react-bootstrap";

export const Signup = () => {
  const [show, setShow] = useState(true);

  const genisis = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const onSubmit = (val, OnSubmitProps) => {
    console.log("form values", val);
    console.log("submit props", OnSubmitProps);
    OnSubmitProps.setSubmitting(false);
    OnSubmitProps.resetForm();
  };

  const validationkit = yup.object({
    name: yup.string().required("Required Field"),
    email: yup.string().required("Required Field"),
    password: yup.string().required("Required Field"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), ""], "passes must match")
      .required("Enter the password"),
  });

  return (
    <>
      {/* <Button onClick={()=>setShow(!show)}>
    Signup
</Button> */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={genisis}
            validationSchema={validationkit}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log("formik props", formik);

              return (
                <Form>
                  <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={TextError} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" id="email" />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" id="password" />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="password2">Password2</label>
                    <Field type="password" name="password2" id="password2" />
                    <ErrorMessage name="password2" component={TextError} />
                  </div>

                  <button type="submit" disabled={formik.isSubmitting}>
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
