import React from 'react';
import backgroundImage from '../images/home.jpg'

const Home = () => {
  return (
    <div>
     <h1 className='home'>Welcome to the Home Page</h1>

     <div className='absolute top-0 left-0 z-0 w-full h-screen overflow-hidden'>
         <img className='w-4/5 h-screen mx-auto overflow-hidden' 
         src={backgroundImage} alt="Home Page Image" />
     </div>

     
     <div className='relative z-10 text-white text-center mt-24'>
  <p className='text-4xl font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-black'>
    Unlock unforgettable experiences<br/>with just a ticket<br/>Your gateway to excitement<br/>awaits!
  </p>
</div>




      </div>
  );
};

export default Home;

