import React from 'react';
import { Container } from 'react-bootstrap';
import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
          <Container className='d-flex justify-content-between align-items-center py-3 bg-dar'>
            <img className='bg-white px-3 py-1 rounded' style={{width : '120px'}} src={logo} alt="" />
            <form action="">
                <input type="text" className='rounded px-2 py-1 border-0' placeholder='Search your destination' />
            </form>
            <div>
                <Link className='mx-2 text-decoration-none text-white bg-danger p-2 rounded'>News</Link>
                <Link className='mx-2 text-decoration-none text-white bg-danger p-2 rounded'>destination</Link>
                <Link className='mx-2 text-decoration-none text-white bg-danger p-2 rounded'>Blog</Link>
                <Link className='mx-2 text-decoration-none text-white bg-danger p-2 rounded'>Contact</Link>
                <Link className='mx-2 text-decoration-none text-white bg-primary p-2 rounded' to='/login'>Login</Link>
            </div>
          </Container>
        </nav>
    );
};

export default Header;