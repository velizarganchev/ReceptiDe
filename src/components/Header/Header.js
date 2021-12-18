import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  const onLogout = (e) => {
    e.preventDefault();

    authService.logout(user.accessToken).then(() => {
      logout();
      navigate("/Home");
    });

    return null;
  };
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
      <span className="welcome">Welcome {user.email}</span>
      <Nav.Link as={Link} to={"/create-recipe"}>
        Create Recipe
      </Nav.Link>
      <Nav.Link onClick={onLogout}>Logout</Nav.Link>
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
              {user.email ? (
                <Nav.Link as={Link} to={"/my-recipes"}>
                  My Recipes
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
            <Nav>{user.email ? authenticatedUser : guestUser}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
