import React,  { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../../../data"


const SingleCard = () => {
  let params = useParams()
  let paramsValue = params.id
  // const [paramsValue, setParamsValue] = useState(params.id);
  let currentCard = data.find((vocabCard) => vocabCard.question = paramsValue);
  console.log(paramsValue)
 

  // const handleIncrease = () => {
  //   setParamsValue( + 1);
  // };




  return (
    <div>

      <h1>{currentCard.question}</h1>
      <p>{currentCard.answer}</p>
      {/* <button type="button" onClick={handleIncrease}>
        Click me
      </button> */}
    </div>
  )
}

export default SingleCard
