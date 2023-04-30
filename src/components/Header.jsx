import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import logo from  '../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUser, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => {console.log(error)})
  }
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
                {
                  user ? <>
                  <FaUserAlt className='mx-2' style={{width: '30px', height: '30px'}}/>
                  <button onClick={handleLogOut} className='mx-2 btn btn-danger'>Logout</button> 
                  </>:
                  <Link className='mx-2 btn btn-danger' to='/login'>Login</Link>
                }
               
            </div>
          </Container>
        </nav>
    );
};

export default Header;