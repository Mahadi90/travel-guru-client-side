import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <Header></Header>
      <Form className="w-50 mx-auto mt-3 border py-3 px-5">
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="warning" type="submit">
          Login
        </Button>
        <p><small>Don't have and account? Plaease <Link className="text-warning" to='/register'>Craete and account</Link></small></p>
      </Form>
    </div>
  );
};

export default Login;
