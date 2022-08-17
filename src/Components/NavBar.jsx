import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="fw-bold">
        <NavLink className="nav-link" to="/">
          Book-App
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav>
            <NavLink className="nav-link fw-bold" to="/favorites">
              Favorites
            </NavLink>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
