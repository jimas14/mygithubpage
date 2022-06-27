import './App.scss';
import logo from './img/logo.png';
import background from './img/background.mp4';
import React, { useState } from 'react';

function App() {
    const [nav, setNav] = useState('home');

    return (
        // TODO: Separate header, nav, content, and footer to components
        <div className='app'>
            {/* TODO: Update meta tags for better embed (include logo, better description, etc.) */}

            <video id="background" autoPlay muted loop playsInline>
                <source src={background} type='video/mp4'></source>
            </video>

            <div className='header'>
                <img id="logo" src={logo} alt='Landscape photo of Silver Spring, Maryland.'></img>
            </div>

            <div className='navigation'>
                <div className='row'>
                    <div className='col'>
                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('home')}>
                            HOME
                        </button>
                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('about')}>
                            ABOUT
                        </button>
                        <button id='btn' className='btn btn-link shadow-none' 
                                onClick={() => setNav('contact')}>
                            CONTACT
                        </button>
                    </div>
                </div>
            </div>

            {/* TODO: Add routing */}
            <div className='content'>
                {nav === 'home' &&
                    <div className='home'>
                        
                    </div>
                }
                {nav === 'about' &&
                    <div className='about'>
                        {/* <img  
                            id='shot' 
                            src={shot} 
                            alt='Headshot of Jimmy Schleicher'>
                        </img> */}
                        {/* TODO: make height static and responsive w page */}
                        {/* TODO: center blurb vertically */}
                        <p id='blurb'>
                                Jimmy Schleicher is a cool dude
                        </p>
                    </div>
                }
            </div>

            <div className='footer'>
                <div className='socials'>
                    <div className='row'>
                        <div className='col'>
                            <a  id='btn'
                                href='https://www.google.com'
                                target='_blank'
                                rel='noreferrer'>
                                Jimmy
                            </a>
                            <a  id='btn'
                                href='https://www.google.com'
                                target='_blank'
                                rel='noreferrer'>
                                Schleicher
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
