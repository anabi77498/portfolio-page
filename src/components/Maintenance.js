import { Container, Row, Col } from "react-bootstrap";
import hammer from '../assets/img/icons8-hammer-48.png';

export const Maintenance = () => {
  return (
    <section className="maintenance" id="maintenance">
      <Container>
        {/* <Row className="align-items-center"> */}
            <div>
            <h2>{`My portfolio is currently unavailable due to site updates`}
            </h2>
              <div className="p-text">
              <p>You've reached Asad Nabi's Portfolio Page. Updates are in progress and my site is currently undergoing maintenance. Please check back soon!
              </p>
              <p>Feel free to contact me at <a href = "mailto: an448@cornell.edu">an448@cornell.edu</a> or message me at&nbsp;<a href="https://www.linkedin.com/in/asadnabi7/">LinkedIn </a></p>      
              </div>
            </div>
      </Container>
    </section>
  )
}