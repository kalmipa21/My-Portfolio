import TrackVisibility from "react-on-screen";
import ProjectCard from "../components/ProjectCard";
import ecommerce from "../assets/images/Projects/ecommerce.png";
import weddinginvt from "../assets/images/Projects/wedding invitation.png";
import appandrois from "../assets/images/Projects/apps android.jpg";
import portfolio from "../assets/images/Projects/portfolio.png";

import { Container, Row, Tab } from "react-bootstrap";
const projects = [
  {
    title: "E-Commerce",
    description: "HTML, CSS, Bootstrap, & ReactJS",
    detail: "Web portal selling gaming gadgets and accessories",
    imgUrl: ecommerce,
    demo: "https://fe-tokobapakmu.vercel.app/",
  },
  {
    title: "Wedding Invitation",
    description: "HTML, CSS, & Javascript",
    detail: "Wedding invitation website",
    imgUrl: weddinginvt,
    demo: "https://web-undangan-eta.vercel.app/",
  },
  {
    title: "My Portfolio",
    description: "HTML, CSS, Bootstrap, & ReactJS",
    detail: "My Personal portfolio website",

    imgUrl: portfolio,
    demo: "https://my-portfolio-kalmipa21.vercel.app/",
  },
  {
    title: "Android Apps",
    description: "Unity, C#",
    detail:
      "Electronic module about physics subject based on android operating system",
    imgUrl: appandrois,
    demo: "https://drive.google.com/file/d/12ubCgC-eXMuGY2TIayMNcvICqAvitAk9",
  },
];

export default function Projects() {
  return (
    <Container className="paddingpages">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <Row className=" text-center mb-3">
              <h2>Projects</h2>
            </Row>
            <Row className="justify-content-evenly align-items-center">
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Row className="">
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Container>
            </Row>
          </div>
        )}
      </TrackVisibility>
    </Container>
  );
}
