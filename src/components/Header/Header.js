import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link href="/">
            <Navbar.Brand>
              <i class="fas fa-utensil-spoon fa-lg"></i> Recepti.de
            </Navbar.Brand>
          </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Receptions" id="basic-nav-dropdown">
                <NavDropdown.Item href="/main-dishes">
                  Main Dishes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/soups">Soups</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/salads">Salads</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/desserts">Desserts</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/all-recipes">All Recipes</Nav.Link>
              <Nav.Link href="all-products">All Produkts</Nav.Link>
            </Nav>
            <Nav>

              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBox />
    </header>
  );
};
export default Header;
