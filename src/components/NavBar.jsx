import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  function isActive(target) {
    const { pathname } = location;
    if (pathname === "/") return ["home"].includes(target);
    else return pathname.includes(target);
  }
  return (
    <Navbar className=" bg-primary-subtle" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className=" p-0 m-0">Portfolio</h2>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink to="/" className={isActive("Home") ? "active" : "link mx-3"}>
            Home
          </NavLink>
          <NavLink
            to="/news"
            className={isActive("About") ? "active mx-3" : "link mx-3"}
          >
            News
          </NavLink>
          <NavLink
            to="/project"
            className={isActive("News") ? "active mx-3" : "link mx-3"}
          >
            Project
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
