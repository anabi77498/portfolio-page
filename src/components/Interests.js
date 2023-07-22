import IconBackend from "../assets/img/backend.png";
import IconMl from "../assets/img/artificial-intelligence-5.svg";
import IconCloud from "../assets/img/cloud-computing-4276.svg";
import IconSust from "../assets/img/sustainable.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Interests = () => {

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
    <section className="skill" id="interests">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Interests
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
            </p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={IconBackend} alt="Image" />
                <h5>Backend Development</h5>
              </div>
              <div className="item">
                <img src={IconMl} alt="Image" />
                <h5>Machine Learning</h5>
              </div>
              <div className="item">
                <img src={IconCloud} alt="Image" />
                <h5>Cloud Architecture</h5>
              </div>
              <div className="item">
                <img src={IconSust} alt="Image" />
                <h5>Sustainability</h5>
              </div>
              <div className="item">
                <img src={IconSust} alt="Image" />
                <h5>Weight Training</h5>
              </div>
              <div className="item">
                <img src={IconSust} alt="Image" />
                <h5>Muay Thai</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}