import { Modal, Button } from "antd";
import { Formik, Form, Field } from "formik";
import React from "react";

const LoginIndex = ({ isModalVisible, setIsModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    handleCancel();
  };

  return (
    <>
      <Modal
        title={
          <div
            style={{
              textAlign: "center",
              cursor: "move",
              fontWeight:"700"
            }}
          >
            Login Page 
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        destroyOnClose
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold pt-2">Email or Username :</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="form-control"
              />
              {errors.email && touched.email && errors.email ? (
                <p className="text-danger mt-1">{errors.email}</p>
              ) : null}

              <label className="fw-bold">Password :</label>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="form-control"
              />
              {errors.password && touched.password && errors.password ? (
                <p className="text-danger mt-1">{errors.password}</p>
              ) : null}

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline-secondary my-4 "
                >
                  Login
                </button>
                <p>
                  Not a member? <a href="#">Register</a>
                </p>
                <p>or sign up with: </p>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default LoginIndex;
