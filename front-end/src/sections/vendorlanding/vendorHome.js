
import React from 'react';
import SignOut from '../auth/SignOut'; // Adjust the path as necessary
import SignedInNav from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';
import './Vendor.css'


const VendorLandingPage = () => {
    <title>Vendor Landing page</title>
    return (
        <>
        <SignedInNav />
        <div className = "vendorHome">
            <br />
            <br />
            <p className='box'>
            <h1>Welcome Vendor!</h1>
            <br />
            <p>"Here's your quick guide to managing your flower catalog with ease"</p>
            <br />
            <br />
            <p className='minibox'><a>Home</a> | <a className='link1'>Add Flower</a> | <a>View Catalogue</a></p>
            <p>Add Flowers to your catalog with just a few clicks!</p>
            <br />
            <br />    
            <p className='minibox'><a>Home</a> | <a>Add Flower</a> | <a className='link1'>View Catalogue</a></p>
            <p>Preview your entire collection as customers will see it!</p>
            <br />
            <br />
            <p className='minibox3'> | <a className='link2'>VendorName</a></p>
            <p className='minibox2'> <a>VendorName</a> <br /> <a>Sign Out</a></p>
            <p className='p2'>Update your information, logo, and settings to personalize your profile!</p>
            <p className='p2'>Click Sign out to securely sign out of your account!</p>

            </p>
        
           <br />
        </div>
        <Footer />
        </>
    );
};

export default VendorLandingPage;
