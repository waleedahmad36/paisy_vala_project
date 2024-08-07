// import React, { useState } from 'react';
// import axios from 'axios';
// import '../styles/Signup.css';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/users/', { username, password, email });
//       // Redirect to login or dashboard
//     } catch (error) {
//       console.error('There was an error signing up!', error);
//     }
//   };

//   return (
//     <div className="signup">
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/token/', { username, password });
      localStorage.setItem('token', response.data.access);
      // Redirect to profile or dashboard
    } catch (error) {
      console.error('There was an error signing up!', error);
    }
  };

  return (
    <div className="login flex items-center justify-center h-screen w-full bg-gray-900">
    <div className="form-container w-80 rounded-lg bg-gray-900   flex justify-center flex-col items-center py-8 text-gray-50">
      <p className="title text-center text-2xl font-bold">Signup</p>
      <form className="form mt-6"  onSubmit={handleSignup} >
        <div className="input-group mt-1 text-sm">
          <input
            type="text"
            placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
            id="username"
            className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-50 focus:border-purple-400 my-2"
          />
        </div>
        <div className="input-group mt-4 text-sm">
          <input
            type="password"
            placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-50 focus:border-purple-400 my-2"
          />
          {/* <div className="forgot flex justify-end text-xs text-gray-400 mt-2 mb-3">
            <a href="#" className="hover:underline hover:text-purple-400">
              Forgot Password?
            </a>
          </div> */}
        </div>
        <div className="input-group mt-1 text-sm">
          <input
            type="text"
            placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
            id="Confirm Password"
            className="w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-gray-50 focus:border-purple-400 my-2"
          />
        </div>
        <button className="sign block w-full bg-purple-400 p-3 text-center text-gray-900 rounded-md font-semibold"   type='submit' >
          Sign up
        </button>
      </form>
      <div className="social-message flex items-center pt-4">
        <div className="line flex-1 h-px bg-gray-700"></div>
        <p className="message px-3 text-sm text-gray-400">
        Signup with social accounts
        </p>
        <div className="line flex-1 h-px bg-gray-700"></div>
      </div>
      <div className="social-icons flex justify-center mt-4">
        <button
          aria-label="Log in with Google"
          className="icon p-3 bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with Twitter"
          className="icon p-3 bg-transparent ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
          </svg>
        </button>
        <button
          aria-label="Log in with GitHub"
          className="icon p-3 bg-transparent ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
        </button>
      </div>
      <p className="signup text-center text-xs text-gray-400 mt-4">
        Don&#39;t have an account? <a href="#" className="hover:underline hover:text-purple-400">Sign up</a>
      </p>
    </div>
  </div>

    
  );
};

export default Signup;

