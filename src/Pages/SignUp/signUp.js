import React from 'react'
import images from "../../Utils/image";
import Logo from '../../Components/Logo/logo'
import Header from '../../Components/Header/header'
import {
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import CustomButton from "../../Components/Button/button";
import BannerImage from '../../Components/BannerImage/bannerImage';
import CopyRight from '../../Components/CopyRight/copyRight';
import { Link } from 'react-router-dom';
import './signUp.css'

export const SignUp = () => {
  return (
    <>
      <Logo />
      <Container>
        <Row className="first-row justify-content-center">
          <Col className=" col-md-6 form-main-div my-auto">
            <Header headerText={"Create your free account"} />
            <Container className="formdiv">
              <Form
              // onSubmit={formik.handleSubmit}
              >
                <Row className='pl-5'>
                  <Col sm={3}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        name="firstname"
                        type="name"
                        placeholder="First Name"
                      // value={formik.values.password}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      />
                      {/* {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "#ff7c07" }}>
                    {formik.errors.password}
                  </div>
                ) : null} */}
                    </Form.Group>
                  </Col>
                  <Col sm={3}>
                    <Form.Group className="mb-4">
                      <Form.Control
                        name="lastname"
                        type="name"
                        placeholder="Last Name"
                      // value={formik.values.password}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      />
                      {/* {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "#ff7c07" }}>
                    {formik.errors.password}
                  </div>
                ) : null} */}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Control
                    name="email"
                    type="Email"
                    placeholder="Email address"
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  />
                  {/* {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "#ff7c03" }}>
                    {formik.errors.email}
                  </div>
                ) : null} */}
                </Form.Group>
                <CustomButton
                  type="submit"
                  buttonText="Sign Up"
                  to="/verifyOtp"
                />

                <div className="m-3">
                  Have an account??
                  <Link className="signIn" to="/">Sign in</Link>
                </div>
              </Form>
            </Container>
          </Col>
          <Col xs="6" className="col-md-6 img-col">
            <BannerImage
              bannerImage={images.signUp}
              alt={"signUpImage"} />
          </Col>
        </Row>
        <CopyRight />
      </Container>
    </>
  )
}
