import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div>
                <img src={imgUrl} />
                <div>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}