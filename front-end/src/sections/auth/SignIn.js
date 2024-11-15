import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css'; // Import the CSS module
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar/Navbar_landing';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        console.log('SignIn component rendered');
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/signin`, {
                email,
                password
            });
            console.log(response.data);
            // Save the token if needed
            localStorage.setItem('token', response.data.token);
            // Redirect to the landing page
            navigate('/vendor-main');
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div>
            <Navbar/>
        <div className={styles.authContainer}>
            <form className={styles.authForm} onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
        </div>
    );
};

export default SignIn;
