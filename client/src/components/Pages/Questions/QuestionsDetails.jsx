import React, { useState } from 'react'
import { useParams, Link, } from 'react-router-dom'

import upvotes from '../../../assets/sort-up.svg'
import downvotes from '../../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'


const QuestionsDetails = () => {

 const { id } = useParams()
 console.log(id)

const [Answer] = useState();

  var questionList = [{
    _id: '1',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    userPosted: "man",
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "kumar",
      answeredOn: "jan 2",
      userId: "2",
    }]
  },{
    _id: '2',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "R", "python"],
    userPosted: "man",
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: "kumar",
      answeredOn: "jan 2",
      userId: "2",
    }]
  },{
    _id: '3',
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["javascript", "R", "python"],
    userPosted: "man",
    askedOn: "jan 1",
    answer: [{answerBody: "Answer", userAnswered: "kumar", answeredOn: "jan 2", userId: "2",}]

  }]

  return (
    <div className='question-details-page'>
      {
        questionList === null ?
          <h1>Loading...</h1> :
          <>
              {
                questionList.filter(question => question._id === id).map(question =>(
                  <div key={question._id} >
                    <section className="question-details-container">
                      <h1>{question.questionTitle}</h1>
                      <div className='question-details-container-2'>
                        <img src={upvotes} alt="upvotes" width='18' />
                        <p>{question.upVotes - question.downVotes} </p>
                        <img src={downvotes} alt="votes" width='18' />
                        <div style={{width: "100%"}}>
                            <p className='question-body'>{question.questionBody}</p>
                            <div className="question-details-tags">
                              {
                                question.questionTags.map((tag) =>(
                                  <p key={tag}>{tag}</p>
                                ))
                              }
                            </div>
                            <div className="question-action-user">
                              <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                              </div>
                              <div>
                                <p>asked {question.askedOn}</p>
                                <Link to={`/User/${question.userId}`}className='user-link'style={{color: "#0086d8"}}>
                                  <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                  <div>
                                    {question.userPosted}
                                  </div>
                                </Link>
                              </div>
                            </div>
                        </div>
                      </div>
                    </section>
                    {
                      question.noOfAnswers !== 0 && (
                        <section>
                          <h3>{question.noOfAnswers} answer</h3>
                          <DisplayAnswer questionList={questionList} />
                        </section>
                      )
                    }
                    <section className="post-ans-container">
                      <h3>Your Answer</h3>
                      <form>
                        <textarea name="" id="" cols="30" rows="10" value={Answer}></textarea><br />
                        <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                      </form>
                      <p>
                        Browse other Question tagged
                        {
                          question.questionTags.map((tag) => (
                           
                            <Link to='/Tags' key={tag} className='ans-tags'>
                              {" "}
                              {tag}{" "}
                              </Link>
                          ))
                        } {" "}
                        or 
                        <Link to='/AskQuestion' style={{textDecoration: "none", color: "#009dff"}}>ask your own question.</Link>
                      </p>
                    </section>
                  </div>
                ))
              }
          </>
      }

    </div>
  )
}

export default QuestionsDetails
