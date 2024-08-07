import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home min-h-[60vh] flex flex-col justify-center items-center gap-5">
      <h1  className='text-3xl font-extrabold' >Welcome to <span className='text-red-500' >SmartEd</span></h1>
      <p   className='text-slate-100' >Your personalized learning platform</p>
      <p  className='text-gray-100 text-balance' >This login component features a modern, dark-themed design using Tailwind CSS for styling. It includes a username and password input, a 'Forgot Password?' link, and a sign-in button. Social login options for Google, Twitter, and GitHub are also provided. The form is fully responsive, ensuring a consistent user experience across all devices.</p>
      <button  className='bg-red-500/60 text-white py-3 px-6 rounded-lg hover:bg-black font-bold' >Get Started</button>
    </div>
  );
};

export default Home;
