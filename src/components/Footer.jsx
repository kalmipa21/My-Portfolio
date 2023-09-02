import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-evenly">
          <Col size={12} sm={4} className="text-center text-sm-start mt-2">
            <h2>.AnyaR</h2>
          </Col>
          <Col size={12} sm={4} className="text-center mt-2">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rifsapu/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/ariv.sapoetra">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/rifsapu/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end mt-2">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
