import { Row, Container, Col, Image } from "react-bootstrap";
import Foto from "../assets/images/34.jpg";

export default function Home() {
  return (
    <div className="bg-primary-subtle">
      <Container className="w-75 d-flex">
        <Col md={8} className="bg-body-secondary">
          <Row className=" d-flex justify-content-evenly align-items-center">
            <h3 className=" justify-content-evenly text-center mt-2">
              Arif Saputra
            </h3>
            <p className=" col-md-8 col-12 ">
              "I am a quick learner with a strong motivation for continuous
              growth. My disciplined approach ensures success in various
              challenges, and my passion for teaching and technology fuels my
              enthusiasm for sharing knowledge. With a special interest in
              JavaScript and a particular focus on harnessing the power of
              ReactJS, I am also an enthusiast of programming languages,
              demonstrating a profound interest in coding and staying updated
              with technology trends."
            </p>
            <Image
              src={Foto}
              style={{ width: "200px" }}
              className=" col-md-4 col-12"
            ></Image>
          </Row>
        </Col>
        <Col
          md={4}
          className="bg-success-subtle justify-content-between text-center"
        >
          Detail
        </Col>
      </Container>
    </div>
  );
}
