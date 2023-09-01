import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sr3x5sj', 'template_2jldfzr', form.current, 'rjH9tGrB46GgspT_z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setButtonText("Sending...");
      setStatus({ succes: true, message: 'Thank You for Reaching Out!'});
      setButtonText("Sent");
      setSubmitted(true);
      
  };
  
  // return (
  //   <form ref={form} onSubmit={sendEmail}>
  //     <label>Name</label>
  //     <input type="text" name="user_name" />
  //     <label>Email</label>
  //     <input type="email" name="user_email" />
  //     <label>Message</label>
  //     <textarea name="message" />
  //     <input type="submit" value="Send" />
  //   </form>
  // );
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      });
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {!isSubmitted &&
                <form ref={form} onSubmit={sendEmail}>
                  <h2>Get In Touch</h2>
                  <Row>
                    <Row size={12} sm={6} className="px-1">
                      <input name="user_name" type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)}/>
                    </Row>
                    <Row size={12} sm={6} className="px-1">
                      <input name="email" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Row>
                    <Row size={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" value="Send"><span>{buttonText}</span></button>
                    </Row>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>}
                {isSubmitted && 
                  <Col>
                      <h2 className="form-success">{status.message}</h2>
                      <Alert className="form-success-alert" key={"success"} variant={"success"}>
                      <p>I have received your message </p>
                      <p> If you left your email, I will respond shortly! You can expect a response within 1-2 days, if it is urgent please text me at 929-403-4856</p>
                    </Alert>
                  </Col>
                }
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}