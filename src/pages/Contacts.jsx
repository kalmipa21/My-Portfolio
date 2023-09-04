import { Button, Container, Form } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const areAllFieldsFilled = name !== "" && email !== "" && message !== "";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_245bejf",
        "template_otlujib",
        form.current,
        "uvkQVrJHrLTaCLsc4"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="d-block paddingpages justify-content-center">
      <h1 className="text-center">Contact Me</h1>
      <h4 className="text-center text__1">
        Please fill out the form below to discuss any work opportunity
      </h4>
      <Form ref={form} onSubmit={sendEmail} className="form_style mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="user_name"
            className="areatype"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address :</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="user_email"
            className="areatype"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Messages :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            className="areatype"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          value="Send"
          className="proj_button"
          disabled={!areAllFieldsFilled}
        >
          Get Connect! <ArrowRightCircle size={25} />
        </Button>
      </Form>
    </Container>
  );
}
