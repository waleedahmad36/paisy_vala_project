import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);


  const person = {
      username: 'dnsakldnas' ,
      email: ' wa@gmail.com',
      img:'https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_1280.jpg'
    }
  

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.get('/users/me/', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error('There was an error fetching the user profile!', error);
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  useEffect(()=>{
    setUser(person);
  })

  return (
    <div className="profile">
      {user ? (
        <div>
          <div  className='flex justify-between max-w-md mx-auto items-center' >
          <img  src={user.img}  className='w-[100px] h-[100px] rounded-full' />
          <h2 className='text-slate-100 text-lg' >{user.username}'s Profile</h2>
          </div>
          <div  className='flex justify-between max-w-md mx-auto items-center mt-5'  >
          <p>Email: {user.email}</p>
          <p>Enrolled Courses:
             {/* {user.enrollments.length} */}  5
             </p>
          </div>
          {/* Add more user-related information here */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
