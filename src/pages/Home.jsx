import {
  Row,
  Container,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import Foto from "../assets/images/34.jpg";

// function ToAndroidApps(){

// }

function Home() {
  return (
    <div className="bg-primary-subtle">
      <Container className="w-75 d-md-flex">
        <Col md="8" className="bg-body-secondary p-2">
          <Row className=" d-flex justify-content-evenly align-items-center mb-2">
            <h3 className="text-center mt-2">Arif Saputra</h3>
            <p className="col-md-8 col-sm-12 ">
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
              className="col-md-4 col-sm-12"
            ></Image>
          </Row>
          <div>
            <ListGroup>
              <ListGroup.Item className="bg-success-subtle text-primary" active>
                Bootcamp/Class/Projects
              </ListGroup.Item>
              <ListGroup.Item as="ol">
                Android App : E-Module Physics
                <ListGroup.Item className=" text__4">
                  Apps have been uploaded to the Google Console, but apps
                  haven't been updated since 2019, it have been taken down by
                  Google. So the apps can be downloaded{" "}
                  <a href="https://drive.google.com/file/d/12ubCgC-eXMuGY2TIayMNcvICqAvitAk9/view?usp=sharing">
                    here
                  </a>
                  . No virus, its safety.
                </ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item as="ul">
                Instrumentational Porjects: Fusion Method for Microwave
                Tomography Images
                <ListGroup.Item className=" text__4">
                  Combine two or more microwave tomography images using the
                  following methods:
                  <div className=" ps-3">
                    <li>Wavelength Method</li>
                    <li>Pyramid Method</li>
                    <li>Gaussian-Laplacian Method</li>
                  </div>
                  Research paper can be seen in the following{" "}
                  <a href="https://pubs.aip.org/aip/acp/article/2858/1/070003/2906807/Image-fusion-method-for-microwave-tomography">
                    link
                  </a>
                  . Or you can search by{" "}
                  <a href="https://doi.org/10.1063/5.0162860">
                    https://doi.org/10.1063/5.0162860
                  </a>
                  .
                </ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item as="ol">
                Bootcamp: Eduwork.id
                <ListGroup.Item className=" text__4">
                  Eduwork Bootcamp Eduwork is an e-learning platform that helps
                  students find jobs by being mentored by experienced mentors in
                  the industry. Eduwork mentors are real practitioners who are
                  already professionals in their field. What I learn:
                  <div className=" ps-3">
                    <li>Learn about HTML and CSS.</li>
                    <li>Learn about Bootstrap, react-bootstrap.</li>
                    <li>
                      Create app using react, router-dom, redux, hook, etc.
                    </li>
                    <li>Learn how to Fetching Data.</li>
                    <li>Create restfull API and Build React Project by API.</li>
                  </div>
                  You can see detail of my projects by clicking "Web Projects"
                  in navbar-menus.
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div>
            <ListGroup>
              <ListGroup.Item className="bg-success-subtle text-primary" active>
                Employment History
              </ListGroup.Item>
              <ListGroup.Item as="ul">
                Freelancer <span className=" fw-bold">(Now)</span>
                <ListGroup.Item className=" text__4">
                  <div className=" ps-3">
                    <li>
                      Basic Web Programming Lecturer (Universitas PGRI
                      Yogyakarta-Sistem Informasi)
                    </li>
                    <li>
                      Physics Lecturer (Universitas Global Jakarta-Teknik
                      Elektro)
                    </li>
                    <li>
                      Multimedia Design for Teaching Lecturer (Institut
                      Pendidikan Indonesia Garut-Pendidikan Fisika)
                    </li>
                    <li>
                      Private Teacher for web Programming and Math-Physics
                    </li>
                  </div>
                </ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item as="ol">
                Physics Teacher{" "}
                <span className=" fw-bold">
                  (at Fitrah Islamic World Academy, Bogor 2022-Now)
                </span>
                <ListGroup.Item className=" text__4">
                  <div className=" ps-3">
                    <li>Assigning homework as an extension of learning.</li>
                    <li>
                      Designing and implementing a carefully thought out
                      curriculum for grades 9-12
                    </li>
                    <li>
                      Collaborating with other faculty members to connect
                      curriculum and deepen the level of learning taking place
                    </li>
                    <li>
                      Designing and implementing ffective organizational systems
                      to document student learning.
                    </li>
                    <li>Grading tests and exams using accurate answer keys.</li>
                    <li>
                      Monitoring student progress and performance, and
                      maintained meticulous documentation for each student.
                    </li>
                    <li>
                      Teaching students with international Syllabus (Cambridge
                      IGCSE AS and A Level).
                    </li>
                    <li>Making Lesson plan using 43 Element of Marzano.</li>
                  </div>
                </ListGroup.Item>
              </ListGroup.Item>
              <ListGroup.Item as="ol">
                Physics Teacher{" "}
                <span className=" fw-bold">
                  (at Motivator Quran Ekselensia, Depok 2019-2021)
                </span>
                <ListGroup.Item className=" text__4">
                  <div className=" ps-3">
                    <li>
                      Created and implemented lesson plans based on child-led
                      interests and curiosities.
                    </li>
                    <li>
                      Maintained organized files and documentation of each
                      student's progress.
                    </li>
                    <li>
                      Provided optimal instruction and academic support to
                      students.
                    </li>
                    <li>Taught physics with creative method.</li>
                  </div>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col md="4" className="bg-success-subtle justify-content-center p-1">
          <h4 className="mt-2 text-center">Profile</h4>
          <Card
            className=" w-100 mt-4"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className=" sub__heading__2">Educations</Card.Header>
            <Card.Body>
              <Card.Title className=" sub__heading__3">
                Universitas Indonesia
              </Card.Title>
              <Card.Text className=" text__4">
                Master Degree at Physics <br /> Major: Instrumentational Physics
              </Card.Text>
              <Card.Title className=" sub__heading__3">
                Universitas Negeri Jakarta
              </Card.Title>
              <Card.Text className=" text__4">
                Bachelor Degree at Physics <br /> Major: Educational Physics
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className=" w-100 mt-2"
            border="primary"
            style={{ width: "18rem" }}
          >
            <Card.Header className=" sub__heading__2">Biodata</Card.Header>
            <Card.Body>
              <Card.Title className=" sub__heading__3">Address</Card.Title>
              <Card.Text className=" text__4">
                Jalan Pribadi I, Pangkalan Jati Baru, Cinere, Depok
              </Card.Text>
              <Card.Title className=" sub__heading__3">
                Date/ Place of Birth
              </Card.Title>
              <Card.Text className=" text__4">Jakarta, July 1 1995</Card.Text>
              <Button
                onClick={() =>
                  window.location.replace("//www.linkedin.com/in/rifsapu")
                }
                className=" justify-content-between"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default Home;
