import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  function isActive(target) {
    const { pathname } = location;
    if (pathname === "/") return ["home"].includes(target);
    else return pathname.includes(target);
  }
  return (
    <Navbar expand="md" className="mynavbar fixed-top" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className=" p-0 m-0 titleNavbar">.AnyaR</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          onClick={() => setShowMenu(!showMenu)}
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Nav className="ms-auto navbar-link">
            <NavLink
              to="/"
              className={isActive("Home") ? "active" : "link mx-3"}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={isActive("About") ? "active" : "link mx-3"}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={isActive("Projects") ? "active mx-3" : "link mx-3"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contacts"
              className={isActive("Contacts") ? "active mx-3" : "link mx-3"}
            >
              Contacts
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
