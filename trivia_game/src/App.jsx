import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Question from './Question';
import Answer from './Ans';
import { nanoid } from 'nanoid'

function App() {
  const [questions, setQuestions] = useState([])
  const [quest, setQuest] = useState([])

  useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      // .then(newQuest())
  }, [])


  function generateNewQuest(i) {
    console.log(questions[i])
    return {
      question: questions[i].question.replace(/&#039;/g, "'").replace(/&quot;/g, '"'),
      answer: questions[i].correct_answer,
      options: questions[i].incorrect_answers,
      type: questions[i].type,
      isChecked: false,
      qid: nanoid(),
      aid: nanoid()
    }
  }


  function newQuest() {
    const newArr = []
    for (let i = 0; i < 5; i++) {
      newArr.push(generateNewQuest(i))
    }
    console.log(newArr)
    setQuest(newArr)
  }

  const qElements = quest.map(question =>
    <div>
      <Question key={question.qid} quest={question.question} />
    <Answer key={question.aid} type={question.type} ans={question.answer} wans={question.options}/>
    </div>
  )



  return (
    <div className='main'>
      <h2 className='title'>Triviago!</h2>
      <div className='question-box'>
        {qElements}
      </div>
      <button className='submit-btn' onClick={newQuest}>Submit</button>
    </div>
  )
}

export default App
