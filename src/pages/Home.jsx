/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profileImg from "../assets/images/photo for banner.png";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = ["Web Developer", "Front-End", "Back-End", "Teacher"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(300);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };
  return (
    <Container className="banner">
      <Row className="aligh-items-center">
        <Col sm="12" md="5">
          <TrackVisibility className="d-flex justify-content-md-center">
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__zoomIn imgBanner" : ""
                }
              >
                <img src={profileImg} alt="profileImg" />
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col sm="12" md="7">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  I'm{" "}
                  <span className="txt-rotate">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <div className="descriptiontxt">
                  <p className="ps-5">
                    I am an educator and developer with expertise in web
                    programming and physics. My proficiency extends to
                    simplifying concepts, encouraging questions, and enhancing
                    practical skills for students. Additionally, showcases my
                    technical skills in HTML, CSS, ReactJS, NodeJS, and Matlab.
                    I'm poised to excel in roles as a front-end or full-stack
                    software engineer.
                  </p>
                </div>

                <Button
                  className=" button border-2"
                  onClick={() => console.log("connect")}
                >
                  Let’s Connect <ArrowRightCircle size={25} />
                </Button>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
