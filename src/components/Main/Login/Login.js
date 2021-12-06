import {
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import * as authService from "../../../services/authService";

const Login = ({loginHandler}) => {

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get("username");

    authService.Login(username);
    loginHandler(username);
    navigate("/");
  };

  return (
    <Form onSubmit={onLogin}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="username">Username</Form.Label>
          <InputGroup className="mb-2">
            <InputGroup.Text>@</InputGroup.Text>
            <FormControl id="username" placeholder="Username" name="username" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            className="mb-2"
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
