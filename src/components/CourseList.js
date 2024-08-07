import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Question from './Question';
import '../styles/CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // useEffect(() => {
  //   axios.get('/api/courses/')
  //     .then(response => {
  //       setCourses(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the courses!', error);
  //     });
  // }, []);

const list = [
  {
    id:1,
    title:'Web Development',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
  {
    id:2,
    title:'Data Science',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
  {
    id:3,
    title:'Python Development',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
  {
    id:4,
    title:'MERN stack',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
  {
    id:5,
    title:'Deep LEarning',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
  {
    id:6,
    title:'Data Scientist',
    img:'https://cdn.pixabay.com/photo/2024/05/17/07/19/pupil-8767596_1280.jpg',
    questions:[
      {
        question:{
          id:1,
          query:'Who are you',
          answer:'I am boy'
        }
      }
    ],
  },
]


useEffect(()=>{
  setCourses(list);
},[])

  const handleCourseClick = async (courseId) => {
    try {
      // const response = await axios.get(`/api/courses/${courseId}/`);
      // setSelectedCourse(response.data);
      setSelectedCourse(courses[courseId-1]);
    } catch (error) {
      console.error('There was an error fetching the questions!', error);
    }
  };

  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      <div  className='max-w-lg mx-auto' >
        {courses?.map(course => (
          <div  className=' flex  justify-between items-center gap-3 my-2' >
          <p  className='text-lg font-semibold cursor-pointer'  key={course.id} onClick={() => handleCourseClick(course.id)}>{course.title}
          </p>
          {course.img && <img  src={course.img}   className='w-10 h-10 rounded-lg' />}
          </div>
        ))}
      </div>
      {selectedCourse?.questions && (
        <div>
          <h2>{selectedCourse.title}</h2>
          {selectedCourse?.questions?.map(question => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
