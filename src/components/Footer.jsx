import { Container, Row, Col } from "react-bootstrap"
import { Newsletter } from "./Newsletter.jsx"
import logo from "../assets/img/logo.svg"


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
                        <div className="text-center text-sm-end">
                            <a href=""><img src={logo}></img></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        
    )
}