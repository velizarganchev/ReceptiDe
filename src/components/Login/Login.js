import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .Login(email, password)
      .then((authdata) => {
        login(authdata);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={onLogin}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="email">Username</Form.Label>
          <InputGroup className="mb-2">
            <FormControl
              id="email"
              placeholder="Email"
              name="email"
              type="email"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            className="mb-2"
            type="password"
            id="password"
            placeholder="1234"
            name="password"
          />
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-2"
            label="Remember me"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Login
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default Login;
