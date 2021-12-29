import { useState } from "react";
import { useNavigate } from "react-router";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";

import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

const Register = () => {
  const initialState = { passMatch: "", passLengt: "" };
  const navigate = useNavigate();

  const [errors, setErrors] = useState(initialState);
  const { login } = useAuthContext();

  const onRegister = (e) => {
    e.preventDefault();

    let { email, password, confirmPassword } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (password !== confirmPassword) {
      setErrors((state) => ({
        ...state,
        passMatch: "Passwords did not match!",
      }));

      setTimeout(() => {
        setErrors(initialState);
      }, 3000);
    }else {
      authService
        .Register(email, password)
        .then((authData) => {
          login(authData);
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <>
      <h1>Register</h1>
      <Form onSubmit={onRegister} method="POST">
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
            <Alert variant="danger" show={errors.passLengt}>
              {errors.passLengt}
            </Alert>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
            />
            <Alert variant="danger" show={errors.passMatch}>
              {errors.passMatch}
            </Alert>
          </Form.Group>
        </Row>
        <Button className="register-button" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
export default Register;
