import React, { useContext } from 'react';
import Header from './Header';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../providers/AuthProvider';


const Register = () => {

    const { craeteUser } = useContext(AuthContext)

    const handleregister = e => {
        e.preventDefault()

        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fname, lname, email, password)

        craeteUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <Header/>
            <Form onSubmit={handleregister} className="w-50 mx-auto border border-dark rounded py-3 px-5 my-3">
        <h3>Create an account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='fname' placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lname' placeholder="Enter your last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="warning" type="submit">
          Login
        </Button>
        <p><small>Already have an account? Plaease <Link className="text-warning" to='/login'>Login</Link></small></p>
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

export default Register;