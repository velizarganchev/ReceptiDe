import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <i class="fas fa-utensil-spoon fa-lg"></i> Recepti.de
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Receptions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Main Dishes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Soups</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Salads</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Desserts</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Drinks</Nav.Link>
              <Nav.Link href="#link">Produkts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link href="#memes">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
