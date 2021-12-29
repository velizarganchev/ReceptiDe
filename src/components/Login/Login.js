import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Login = () => {
  const initialState = { pass: "" };
  const [errors, setErrors] = useState(initialState);

  const { login } = useAuthContext();
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
        setErrors((state) => ({
          ...state,
          pass: "Email or Password don't match",
        }));

        setTimeout(() => {
          setErrors(initialState);
        }, 3000);

        console.log(err);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={onLogin} method="POST">
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            method="POST"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email"
              name="email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Alert variant="danger" show={errors.pass}>
          {errors.pass}
        </Alert>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
};
export default Login;
