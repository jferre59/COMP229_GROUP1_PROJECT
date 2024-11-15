import React from 'react';
import SignOut from '../auth/SignOut'; // Adjust the path as necessary
import './home.css';
import logo from '../../assets/logo.png';
import Navbar from '../../components/navbar/Navbar_landing';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
       <>
       <Navbar/>
        <section id = 'mainhome'>
            <div id = 'img'>
                <img src = {logo} alt = "logo" className = 'logo'/>
            </div>
            <div id = 'homeContent'>
                <span id = "title">Build your flower catalogue with MernMavericks</span>
                <p>
                    Your go-to team of skilled developers for creating stunning, fast and reliable 
                    websites tailored to your flower business!
                </p>

                <Link to="/signup"><button id = 'signup'>Sign Up Now</button></Link>
            </div>
            <div id = 'footer'>
                <hr/>
                    <footer>@copyright MernMavericks TEAM | COMP229 - Web Application Development | Fall 2024 </footer>
                <hr/>
            </div>
        </section>
       </>
        
    );
};

export default LandingPage;
