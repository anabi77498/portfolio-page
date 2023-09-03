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
            <div className={""}>
            <h1>{`Hi, I'm Asad Nabi`}
            </h1>
            <h2>
              <TextTransitions delay={0} springConfig={presets.slow}>{toRotate[index % toRotate.length]}</TextTransitions>
              </h2>
            <div className="p-text">
            <p>I am a software engineer 👨🏽‍💻 driven by my passion for technology, 
              innovation, and new experiences ⚡
            </p>
            <p>Current senior year student and masters candidate at Cornell University 🐻 Proudly from Queens, NYC 🗽 I'm interested in social impact through tech, particularly in low-income communities 🌱 
              My specializations lie in backend development and data science. </p>      
            </div>
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