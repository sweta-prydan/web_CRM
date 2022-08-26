import React, { useState } from 'react'
import Logo from '../../Components/Logo/logo'
import BannerImage from "../../Components/BannerImage/bannerImage";
import images from "../../Utils/image";
import CustomButton from "../../Components/Button/button";
import OTPInput from "otp-input-react";
import './verifyOtp.css';
import {
    Container,
    Row,
    Col,
    Form,
} from "react-bootstrap";
import Header from '../../Components/Header/header'

const VerifyOtp = () => {
    const [otp, setOtp] = useState("");

    return (
        <div>
            <Logo />
            <Container>
                <div className='text-center'>
                    <Row className="first-row justify-content-md-center">
                        <Col className=" col-md-6 form-main-div my-auto">
                            <Header headerText={"Enter OTP"} />
                            <div className='text-center'>
                                <p style={styles.heading}>We have sent </p><span>OTP on xxxxx23@gxxx.com</span>
                            </div>

                            <OTPInput className="justify-content-center" value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" />

                            <Container>
                                <CustomButton
                                    type="submit"
                                    buttonText="Verify OTP"
                                />
                            </Container>
                        </Col>
                        <Col xs="6" className="col-md-6 img-col">
                            <BannerImage bannerImage={images.verifyOtp} alt={"verifyOtpImage"} />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default VerifyOtp
