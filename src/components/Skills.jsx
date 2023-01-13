import Carousel from "react-multi-carousel"
import {Col, Row, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Javascript from "../assets/img/javascript-logo.svg"
import Html from "../assets/img/html-logo.svg"
import Css from "../assets/img/css-logo.svg"
import Php from "../assets/img/php-logo.svg"
import Tailwind from "../assets/img/tailwind-logo.svg"
import React from "../assets/img/react-logo.svg"
import Vue from "../assets/img/vue-logo.svg"
import Laravel from "../assets/img/laravel-logo.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={Javascript} alt="Image"/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={Html} alt="Image"/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={Css} alt="Image"/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Tailwind} alt="Image"/>
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={Php} alt="Image"/>
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={Vue} alt="Image"/>
                                <h5>Vue</h5>
                            </div>
                            <div className="item">
                                <img src={Laravel} alt="Image"/>
                                <h5>Laravel</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}