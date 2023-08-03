import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects_personal = [
    {
      title: "The Developer Dictionary",
      description: "Full-stack PHP application for simplifying technologies",
      imgUrl: projImg2,
      siteUrl: "https://developer-dictionary.fly.dev"
    },
    {
      title: "Ithaca Harvest Festival Website",
      description: "Website designed for the Ithaca Harvest Festival",
      imgUrl: projImg1,
      siteUrl: "https://pages.github.coecis.cornell.edu/info1300-2022fa/an448-project3/"
    },
    {
      title: "Planetary Stewardship based on EPA Indicators",
      description: "Hackathon for non-profits",
      imgUrl: projImg2,
      siteUrl: "https://github.com/anabi77498/EPA-indicators-CC"
    },
  ]

  const hackathon_projects = [
    {
      title: "JPMorgan & Chase co. Code for Good",
      description: "Hackathon for non-profits (private repository)",
      imgUrl: projImg2,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook"
    },
    {
      title: "JPMorgan & Chase co. Innovation Week",
      description: "Internal Hackathon across JPMC technology teams (private repository)",
      imgUrl: projImg3,
      siteUrl: "#projects"
    },
  ]
  
  const team_projects = [
    {
      title: "Pac-Coli",
      description: "Stony Brook IGEM research team project",
      imgUrl: projImg1,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook/Description"
    },
    {
      title: "Juice Finance App",
      description: "OCaml CLI application for managing finances",
      imgUrl: projImg3,
      siteUrl: "https://github.com/anabi77498/juice"
    },
    {
      title: "Autonomous Crop System (NASA)",
      description: "Software Engineering lead for Autonomous Crop Device Research Paper in NASA Research Proposal Writing Experience",
      imgUrl: projImg2,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook"
    },
    {
      title: "Stocks and Tweets",
      description: "Hackathon for non-profits",
      imgUrl: projImg2,
      siteUrl: "https://pages.github.coecis.cornell.edu/info2950-s23/project-brilliant-hitmontop/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"><span className="scale-font">Personal Projects</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"><span className="scale-font">Team Projects</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"><span className="scale-font">Volunteer Projects</span></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects_personal.map((project, index) => {
                            return (
                              <ProjectCard 
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          team_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          hackathon_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}