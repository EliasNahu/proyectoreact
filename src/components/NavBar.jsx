import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link , NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
        A Gabarda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-lg-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" alaign="end">
              <NavDropdown.Item as={Link} to="/category/damas">
              Damas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/caballeros">
                Caballeros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="my-2 my-lg-0">
            <CartWidget />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;