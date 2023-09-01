import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import devDict from "../assets/img/dev-dict.png"
import appleFest from "../assets/img/applefest.png"
import planStew from "../assets/img/env.png"
import paccoli from "../assets/img/paccoli.png"
import juice from "../assets/img/juice.png"
import nasa from "../assets/img/nasa.jpg"
import stocksTweets from "../assets/img/stocks-tweets.png"
import jpmcCfg from "../assets/img/jpmc-cfg.jpg"
import jpmc from "../assets/img/jpmc.png"
import columbiaHacks from "../assets/img/columbia-hacks.png"
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
      imgUrl: devDict,
      siteUrl: "https://developer-dictionary.fly.dev"
    },
    {
      title: "Ithaca Harvest Festival Website",
      description: "Website designed for the Ithaca Harvest Festival",
      imgUrl: appleFest,
      siteUrl: "https://pages.github.coecis.cornell.edu/info1300-2022fa/an448-project3/"
    },
    {
      title: "Planetary Stewardship & EPA Indicators",
      description: "ML project centered around climate change insights",
      imgUrl: planStew,
      siteUrl: "https://github.com/anabi77498/EPA-indicators-CC"
    },
  ]

  const hackathon_projects = [
    {
      title: "JPMC Code for Good",
      description: "Hackathon for non-profits (private repository)",
      imgUrl: jpmcCfg,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook"
    },
    {
      title: "JPMC Innovation Hackathon",
      description: "Internal Hackathon across JPMC (private repository)",
      imgUrl: jpmc,
      siteUrl: "#projects"
    },
    {
      title: "Columbia DivHacks",
      description: "(coming soon)",
      imgUrl: columbiaHacks,
      siteUrl: "#projects"
    }
  ]

  // "Selective hackathon at Columbia University dedicated to diversity in technology"
  
  const team_projects = [
    {
      title: "Pac-Coli",
      description: "Stony Brook IGEM research team project",
      imgUrl: paccoli,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook/Description"
    },
    {
      title: "Juice Finance App",
      description: "OCaml CLI application for managing finances",
      imgUrl: juice,
      siteUrl: "https://github.com/anabi77498/juice"
    },
    {
      title: "Autonomous Crop System",
      description: "Software project lead for research project at NASA Proposal Writing Experience",
      imgUrl: nasa,
      siteUrl: "https://2021.igem.org/Team:Stony_Brook"
    },
    {
      title: "Stocks and Tweets",
      description: "Data Science project analyzing tweet frequency, sentiments and influence on stock price changes",
      imgUrl: stocksTweets,
      siteUrl: "https://pages.github.coecis.cornell.edu/info2950-s23/project-brilliant-hitmontop/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>Below are projects that i've worked on in the past few years as a Computer Science student.</p> <p>My personal favorite is the Developer Dictionary and it is a passion project that I continue to refine to this day</p>
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
                      <p>Below are projects that i've worked on in the past few years as a Computer Science student. My personal favorite is the Developer Dictionary and it is a passion project that I continue to refine on till this day </p>
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