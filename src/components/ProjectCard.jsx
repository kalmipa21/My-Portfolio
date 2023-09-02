import { Card, Button, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  demo,
  detail,
}) {
  return (
    <Col size="12" md="6" lg="4" className="mb-3">
      <Card className=" d-block h-100 justify-content-evenly">
        <div className="proj-imgbx">
          <Card.Img
            className="d-flex j bg-cover w-100 h-100"
            src={imgUrl}
            alt=""
          />
          <Card.Title className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </Card.Title>
        </div>
        <Card.Text className="ps-2 text-center">{detail}</Card.Text>
        <Button className=" proj_button border-2" href={demo}>
          Let’s Check this Out!! <ArrowRightCircle size={25} />
        </Button>
      </Card>
    </Col>
  );
}
