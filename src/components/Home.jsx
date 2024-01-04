import {Link, BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

import React, {useEffect} from 'react';

import { Link as ScrollLink, scroller } from 'react-scroll';

const Home = () => {

    const navigate = useNavigate();

    const handleButtonClickA = () => {  
        setTimeout( () => {
            scroller.scrollTo('about', {
              smooth: true,
              duration: 500,
            });
        },100)}
    
    const handleButtonClickS = () => {  
        setTimeout( () => {
            scroller.scrollTo('solutions', {
              smooth: true,
              duration: 500,
            });
        },100)}
    
    const handleButtonClickC = () => {  
        setTimeout( () => {
            scroller.scrollTo('contact', {
              smooth: true,
              duration: 500,
            });
        },100)  
      };

    const handleButtonClickE = () => {  
        navigate('/about/solutions/contact')

        setTimeout( () => {
            scroller.scrollTo('solutions', {
              smooth: true,
              duration: 500,
            });
        },100)  
      };  

    return ( 
        <>
                <header className='headerH'>
                    <Link to='/'><img src="https://www.usertesting.com/themes/custom/usertesting/logo.svg" alt="logo" /></Link>
                    <nav>
                        <ul>
                            <Link to='/'>Home</Link>
                            <Link onClick={handleButtonClickA} to='/about'>About</Link>
                            <Link onClick={handleButtonClickS} to='/about/solutions'>Solutions</Link>
                            <Link onClick={handleButtonClickC} to='/about/solutions/contact'>Contact</Link>
                            
                        </ul>
                    </nav>
                </header>
                <main>
                    <div className='divHUNO'>
                        <h1>SEE ALL OUR</h1><span> SERVICES</span><br />
                        <button onClick={handleButtonClickE}>Explore now</button>
                    </div>
                    <div className='divHDOS'>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/025/366/622/small/laptop-with-blank-screen-isolate-on-transparent-background-ai-generated-png.png' alt="pc" />
                    </div>
                </main>
                <svg className='ola' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#2F4BFF" fill-opacity="1" d="M0,96L60,85.3C120,75,240,53,360,69.3C480,85,600,139,720,165.3C840,192,960,192,1080,192C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
        </>
     );
}

export default Home