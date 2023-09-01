import { Container, Row, Image, Col } from "react-bootstrap";
import profileImage from "../assets/images/34.jpg";
import Carousel from "react-multi-carousel";
import eduwork from "../assets/images/eduwork.jpg";
import upy from "../assets/images/UPY.png";
import jgu from "../assets/images/jgu.png";
import fiwa from "../assets/images/fiwa.png";

import React from "react";

import html5svg from "../assets/images/html-5-logo-svgrepo-com.svg";
import bootstrapsvg from "../assets/images/bootstrap-fill-svgrepo-com.svg";
import csssvg from "../assets/images/css-3-svgrepo-com.svg";
import expresssvg from "../assets/images/express-svgrepo-com.svg";
import jssvg from "../assets/images/javascript-logo-svgrepo-com.svg";
import matlabsvg from "../assets/images/matlab-svgrepo-com.svg";
import mongosvg from "../assets/images/mongodb-svgrepo-com.svg";
import nodesvg from "../assets/images/nodejs-icon-svgrepo-com.svg";
import githubsvg from "../assets/images/social-github-svgrepo-com.svg";
import unitysvg from "../assets/images/unity-svgrepo-com.svg";
import vscodesvg from "../assets/images/vscode-svgrepo-com.svg";

export default function About() {
  const skillItem = [
    { skill: html5svg, name: "HTML5" },
    { skill: bootstrapsvg, name: "Bootsrap" },
    { skill: csssvg, name: "CSS3" },
    { skill: jssvg, name: "Javascript" },
    { skill: mongosvg, name: "MongoDB" },
    { skill: githubsvg, name: "GitHub" },
    { skill: vscodesvg, name: "VSCode" },
    { skill: expresssvg, name: "ExpressJS" },
    { skill: nodesvg, name: "NodeJS" },
    { skill: matlabsvg, name: "Matlab" },
    { skill: unitysvg, name: "Unity" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Container>
      <Row className="pb-5 d-flex justify-content-between text-center align-items-center border-bottom">
        <Col md="3">
          <Image
            className="rounded-5 image__Profile"
            src={profileImage}
            alt="ImageProfile"
          />
          <h2>Arif Saputra</h2>
        </Col>
        <Col md="9">
          <h2>Skills</h2>
          <div>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              {skillItem.map((skillItem, index) => {
                return (
                  <div className="item" key={index}>
                    <img src={skillItem.skill} alt="" />
                    <h6>{skillItem.name}</h6>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="justify-content-center subkotak">
          <h2 className="sub__heading__1">Employement/Internship History</h2>
        </div>
      </Row>
      <Row>
        <Col>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img src={eduwork} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Intership</h3>
                  <span>June 2023-Aug 2023</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    <li>
                      Created RESTFul API for the reading, updating, creating,
                      and deleting of operations concerning resources using
                      MongoDB.
                    </li>
                    <li>
                      Connected a database so that it can be used by an online
                      server using Mongo Atlas server and Cloudinary.
                    </li>
                    <li>
                      Implemented UI design into a functional website using
                      HTML, CSS, Bootstrap, Javascript, and ReactJS.
                    </li>
                    <li>
                      Created a responsive website that can be used even on
                      tablets, smartphones, or laptops using HTML, CSS,
                      Bootstrap, Javascript, and ReactJS.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img src={upy} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Web Programming Lecturer - (Guest/ Invitation)</h3>
                  <span>Sept 2023-Now</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    <li>
                      Introduce the basics of web design so as to improve
                      students' abilities in creating attractive websites using
                      Figma.
                    </li>
                    <li>
                      Introduce the basics of web design frameworks to students
                      using HTML, CSS, and Bootstrap.
                    </li>
                    <li>
                      Teach how to create a responsive navbar and landing page
                      for users by using HTML, CSS, and Bootstrap.
                    </li>
                    <li>
                      Introduce the React JS framework to students so that web
                      performance can be maximized and the debugging process
                      becomes easier.
                    </li>
                    <li>
                      Introduce GitHub and Git to students as a platform for
                      storing directories online then it can be used by personal
                      or team.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img src={jgu} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Physics Lecturer - (Guest/ Invitation)</h3>
                  <span>Sept 2023-Now</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    <li>
                      Engage students effectively, to generate excitement and
                      attentiveness in the classroom and utilize real-world
                      examples, interactive demonstrations, and questions
                    </li>
                    <li>
                      Clear Concepts to students by simplifying explanations,
                      incorporating relatable stories, and encouraging questions
                      to help students grasp challenging concepts.
                    </li>
                    <li>
                      Foster independent problem-solving by presenting complex
                      problems, promoting group discussions, and exploring
                      diverse problem-solving approaches.
                    </li>
                    <li>
                      Enhance students' experimental proficiency and real-world
                      application understanding through hands-on activities,
                      guided lab sessions, and emphasizing practical
                      implications.
                    </li>
                    <li>
                      Break down mathematical complexities step by step, connect
                      them to everyday situations, and provide ample practice
                      for improved math comprehension.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img src={fiwa} alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Physics Teacher</h3>
                  <span>July 2022 - July 2023</span>
                </div>
                <div className="timeline-body">
                  <ul>
                    <li>
                      Improve students’ knowledge to gain deeper understanding
                      by assigning homework as an extension of learning at the
                      end of class.
                    </li>
                    <li>
                      Design and implement a carefully thought-out curriculum
                      for grades 9-12.
                    </li>
                    <li>
                      Collaborate with other faculty members to connect
                      curriculum and deepen the level of learning taking place
                    </li>
                    <li>
                      Design and implement effective organizational systems to
                      document student learning.
                    </li>
                    <li>
                      Monitor student progress and performance, and maintain
                      meticulous documentation for each student.
                    </li>
                    <li>
                      Teach students with an international Syllabus (Cambridge
                      IGCSE AS and A Level).
                    </li>
                    <li>
                      Make a Lesson plan using 43 Elements of Marzano to
                      increase students’ activity before, at, and after class.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
