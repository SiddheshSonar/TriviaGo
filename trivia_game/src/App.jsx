import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://opentdb.com/api.php?amount=5")
        .then((response) => {
          console.log(response.data.results);
          setData(response.data.results);
          setQuestions(
            response.data.results.map((question, index) => {
              const decodeHtmlEntities = (text) => {
                const textarea = document.createElement('textarea');
                textarea.innerHTML = text;
                return textarea.value;
              };
              const answers = [
                ...question.incorrect_answers,
                question.correct_answer,
              ];

              return (
                <div className='h-full w-full flex flex-col items-center justify-center gap-2' key={index}>
                  <div className='w-full text-xl font-bold ml-2'>
                    {decodeHtmlEntities(question.question)}
                  </div>
                  <div className='flex items-center justify-evenly gap-2 flex-wrap w-full'>
                    {answers.map((answer, index) => {
                      return (
                        <div className='border p-2.5 rounded-2xl cursor-pointer' key={index}>
                            {decodeHtmlEntities(answer)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          );
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <div className='h-screen w-full'>
      {loading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
          {questions}
        </div>
      )}
    </div>
  );
}

export default App;
