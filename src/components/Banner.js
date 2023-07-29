import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/pfp.jpeg"
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import TextTransitions, { presets } from 'react-text-transition'


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(0);
  const toRotate = [ "Student", "Software Developer", "Creative Problem Solver", "Innovator" ];
  const period = 150;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h1>{`Hi, I'm Asad Nabi`}
            </h1>
            <h2>
              <TextTransitions delay={0} springConfig={presets.slow}>{toRotate[index % toRotate.length]}</TextTransitions>
              </h2>
            <div className="p-text">
            <p>I am a technologist, driven by my passion for technology, 
              innovation, and new experiences.
            </p>
            <p>I’m a senior year student and masters candidate at Cornell University interested in data solutions and impact through technology. 
              My specializations lie in backend development, cloud computing and data science. </p>      
            
            </div>
            <button onClick={() => console.log('connect')}>
              Let's Connect 
              <ArrowRightCircle size={25}/>
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}