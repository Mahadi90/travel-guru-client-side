import React from 'react';
import { Container } from 'react-bootstrap';
import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
          <Container className='d-flex justify-content-between align-items-center py-3 bg-dak'>
            <img className='bg-danger px-3 py-1 rounded' style={{width : '110px'}} src={logo} alt="" />
            <form action="">
                <input type="text" className='rounded px-2 py-1 border-warning bg-transparent' placeholder='Search your destination' />
            </form>
            <div>
                <Link to='/' className='mx-2 text-decoration-none text-warning'>Home</Link>
                <Link className='mx-2 text-decoration-none text-warning'>destination</Link>
                <Link className='mx-2 text-decoration-none text-warning'>Blog</Link>
                <Link className='mx-2 text-decoration-none text-warning'>Contact</Link>
                <Link className='mx-2 text-decoration-none text-white bg-danger px-2 py-1 rounded' to='/login'>Login</Link>
            </div>
          </Container>
        </nav>
    );
};

export default Header;