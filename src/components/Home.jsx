import React from 'react';
import bgImg from "../assets/images/rectangle.png"
import Header from './Header';
import './css/Home.css'

const Home = () => {
    return (
        <div className='bg' style={{ backgroundImage: `url(${bgImg})`,
         height: '100vh',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
          }}>
           <Header/>
            <h2>home</h2>
        </div>
    );
};

export default Home;