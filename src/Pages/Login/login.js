import React from "react";
import images from "../../Utils/image";
import { Loginaction } from "../../redux/action";
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "./login.css";
import * as yup from "yup";
import axios from "axios";
import Logo from '../../Components/Logo/logo'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import CustomButton from "../../Components/Button/button";
import Header from '../../Components/Header/header'
import BannerImage from "../../Components/BannerImage/bannerImage";
import CopyRight from "../../Components/CopyRight/copyRight";
import { Link } from "react-router-dom";

const Login = () => {

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("required"),
    password: yup
      .string()
      .max(6, "password must be 6 digit")
      .min(4, "password max more than 4 digit")
      .required("required"),
  });
  const onSubmit = (initialValues) => {
    alert("Login success");
    console.log(
      "email: ",
      initialValues.email,
      "password :",
      initialValues.password
    );
    axios
      .post(process.env.REACT_APP_API_LOGIN, { initialValues })
      .then((res) => console.log(res));

    dispatch(Loginaction(initialValues));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Logo />
      <Container>
        <Row className="first-row justify-content-md-center">
          <Col className=" col-md-6 form-main-div my-auto">
            <Header headerText={"Login"} />
            <Container className="formdiv">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control
                    name="email"
                    type="Email"
                    placeholder="Email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "#ff7c03" }}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    name="password"
                    type="Password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "#ff7c07" }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                  <p className="login-text">Forgot Password?</p>
                </Form.Group>
                <CustomButton
                  type="submit"
                  buttonText="Login"
                />

                <div className="m-3">
                  Don't have a CRM Account?
                  <Link to="/signup" className="span"
                  >
                    SignUp
                  </Link>
                </div>

              </Form>
            </Container>
          </Col>
          <Col xs="6" className="col-md-6 img-col">
            <BannerImage bannerImage={images.login} alt={"loginImage"} />
          </Col>
        </Row>
        <CopyRight />
      </Container>
    </>
  );
};

export default Login;
