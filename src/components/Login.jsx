import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

    const { logIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <Header></Header>
      <Form onSubmit={handleLogin} className="w-50 mx-auto border py-3 px-5 border-dark rounded my-3">
        <h3>Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="warning" type="submit">
          Login
        </Button>
        <p><small>Don't have and account? Plaease <Link className="text-warning" to='/register'>Craete and account</Link></small></p>
      </Form>
      <div className="d-flex justify-content-center">
      <hr className="w-25" />
      <p className="mx-3">OR</p>
      <hr className="w-25" />
      </div>
    <div className="d-flex flex-column w-25 justify-content-center mx-auto mb-5">
    <button className="rounded-pill btn btn-outline-danger"><FaGoogle className="me-1"/> Continue with GOOGLE</button>
      <button className="mt-2 rounded-pill btn btn-outline-primary"><FaFacebook className="me-1"/> Continue with FACEBOOK</button>
    </div>
    </div>
  );
};

export default Login;
