import React from 'react'
import Questions from './Questions'


const QuiestionList = ({questionList}) => {
  return (
    <>
      {
        questionList.map((question) => (
            <Questions question={question} key={question._id} />
        ))
          }

    </>
  )
}

export default QuiestionList
