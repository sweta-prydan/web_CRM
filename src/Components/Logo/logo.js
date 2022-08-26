import React from 'react'
import images from '../../Utils/image';
import {
    Navbar,
    Container,
} from "react-bootstrap";

const Logo = () => {
    return (
        <div>
            <Container>
                <Navbar bg="tranparent">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={images.logo}
                                style={{
                                    width: "100px",
                                }}
                                alt="logo"
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Logo;