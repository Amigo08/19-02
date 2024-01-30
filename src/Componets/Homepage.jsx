import React from 'react';
import { Button } from '@mui/material';
// import image from '../assets/images/img.jpg'
import './Homepage.css'
function Homepage() {
  const handleExplore = () => {
    // Redirect or handle navigation to explore page
    console.log('Explore button clicked');
  };

  return (
    <div className="homepagebody">
        {/* <img src={image} alt="background image" className='backgroundimage'/> */}
  <form className="container">
      <h1>Welcome to Our Amigo Cinemas</h1>
    
      <Button onClick={handleExplore}>Get started</Button>
</form>
    </div>
  );
}

export default Homepage;
