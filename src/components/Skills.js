import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { BiLogoJavascript } from 'react-icons/bi'
import iconHtml from "../assets/img/icons8-html-5.svg";
import iconCss from "../assets/img/icons8-css.svg";
import iconJs from "../assets/img/icons8-javascript.svg";
import iconJava from "../assets/img/icons8-python.svg";
import iconPy from "../assets/img/icons8-java.svg";
import iconPhp from "../assets/img/icons8-php.svg";
import iconOCaml from "../assets/img/icons8-ocaml.pdf";
import iconReact from "../assets/img/icons8-react.svg";
import iconAws from "../assets/img/icons8-amazon-web-services.svg";
import iconMdb from "../assets/img/icons8-mongodb.svg";
import iconFb from "../assets/img/icons8-firebase.svg";
import iconTf from "../assets/img/icons8-tensorflow.svg";

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
            <p>Just a few technologies I love to work with. This is not an exhaustive list! OCaml is definitely special in my eyes. Still a newbie in TensorFlow as of now but soon i'll get their :)
            </p>
            
            <Col>
              <img src={iconJs} className="icons" />
              <img src={iconPy} className="icons" />
              <img src={iconJava} className="icons" />
              <img src={iconOCaml} className="icons" />
            <img src={iconReact} className="icons" />
              <img src={iconAws} className="icons" />
              <img src={iconMdb} className="icons" />
              <img src={iconFb} className="icons" />
              
              <img src={iconTf} className="icons2" />
            </Col>

          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}