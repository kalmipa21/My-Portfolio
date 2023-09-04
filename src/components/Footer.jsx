import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/images/linkedin-svgrepo-com.svg";
import navIcon2 from "../assets/images/facebook-color-svgrepo-com.svg";
import navIcon3 from "../assets/images/instagram-1-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col size="3" sm="4" className="text-center text-sm-start mt-2">
            <h2>.AnyaR</h2>
          </Col>
          <Col size="3" sm="4" className="text-center text-sm-center  mt-2">
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
          <Col size="6" sm="4" className="text-center text-sm-end mt-2">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
