import { Container, Row, Col } from "react-bootstrap"
import { Newsletter } from "./Newsletter.jsx"
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Newsletter />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}></img></a>
                            <a href=""><img src={navIcon2}></img></a>
                            <a href=""><img src={navIcon3}></img></a>
                        </div>
                        <p>CopyRight 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        
    )
}