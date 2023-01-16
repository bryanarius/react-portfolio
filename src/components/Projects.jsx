import {Col, Row, Container } from "react-bootstrap";

export const Projects = () => {

    const Projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg1',
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg1',
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: 'projImg1',
        },
    ]
    return (
    <section ClassName="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
            </Row>
        </Container>
    </section>
    )
}