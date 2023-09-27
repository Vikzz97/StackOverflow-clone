import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import QuestionsList from './QuestionList'
import './HomeMainbar.css'
import { useNavigate } from 'react-router-dom'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  var questionList = [{
    id: 1,
    votes: 3,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    userPosted: "man",
    askedOn: "jan 1"
  }, {
    id: 2,
    votes: 0,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "R", "python"],
    userPosted: "man",
    askedOn: "jan 1"
  }, {
    id: 3,
    votes: 1,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "man",
    askedOn: "jan 1"

  }]

  

    const checkAuth = () => {
        if(user === null){
          alert("login or signup to ask a question");
          navigate('/Auth')
        }else{
          navigate('/AskQuestion')
        }
        
    }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn' >Ask Question</button>
      </div>
      <div>
        {
          questionList === null ?
          <h1>Loading...</h1> :
          <>
            <p> {questionList.length} questions</p>
            < QuestionsList questionList ={questionList} />          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
