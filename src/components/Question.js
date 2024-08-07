import React, { useState } from 'react';
import axios from 'axios';

const Question = ({ question }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [show,setShow]=useState(false);
  const [open,setOpen]=useState(false);
  console.log("this is question",question.question.query)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/validate_answer/', { question_id: question.id, answer });
      // setFeedback(response.data.feedback);
      const res = answer===question.question.answer;
      console.log(res)
      setShow(res);
      setOpen(true);
    } catch (error) {
      console.error('There was an error validating the answer!', error);
    }
  };

  return (
    <div>
      <h2  className='text-red-500' >{question.question.query}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}  className='text-black w-[40vw] h-8 rounded-lg'  />
        <button type="submit"   className='bg-black/70 text-white font-bold px-4 py-2 rounded-lg' >Submit</button>
      </form>
      {open && (
        <div>
          <h3>Feedback</h3>
          <p  className='text-red-500' >
            {/* {feedback.message} */}
            {show ? 'Your anaswer is right' : 'your answer is wrong'}
            </p>
          <h4>References</h4>
          {/* <ul>
            {feedback.references.map(ref => (
              <li key={ref.id}><a href={ref.url}>{ref.text}</a></li>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default Question;
