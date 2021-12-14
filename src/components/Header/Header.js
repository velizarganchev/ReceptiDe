import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ email }) => {
  let guestUser = (
    <>
      <Nav.Link as={Link} to={"/login"}>
        Login
      </Nav.Link>
      <Nav.Link as={Link} to={"/register"}>
        Register
      </Nav.Link>
    </>
  );

  let authenticatedUser = (
    <>
      <span>Welcome {email}</span>
      <Nav.Link as={Link} to={"/create-recipe"}>
        Create Recipe
      </Nav.Link>
      <Nav.Link as={Link} to={"/"}>
        Logout
      </Nav.Link>
    </>
  );
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link as={Link} to={"/Home"}>
            <Navbar.Brand>
              <i className="fas fa-utensil-spoon fa-lg"></i>Recepti.de
            </Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Receptions" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Nav.Link as={Link} to={"/main-dishes"}>
                    Main Dishes
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to={"/soups"}>
                    Soups
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to={"/salads"}>
                    Salads
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to={"/desserts"}>
                    Desserts
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/my-recipes"}>
                My Recipes
              </Nav.Link>
            </Nav>
            <Nav>{email ? authenticatedUser : guestUser}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
