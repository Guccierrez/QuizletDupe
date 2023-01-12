import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ({question, answer, id}) {
  let [visibility, setVisbility] = useState("hidden")

  function handleClick() {
        setVisbility(visibility === 'hidden' ? 'visible' : 'hidden');
      }

  return (     
    <div className="card" style={{ width:"30rem",  backgroundColor: "rgba(0, 0, 0, .075)",margin:"30px"}}>
         
          <h5 className="card-title">Question: {question}</h5>
          <p className="card-text" style={{ visibility:visibility }} >Answer: {answer}</p>
          <button onClick={handleClick}>show answer</button>
          <Link to={`/singleSet/${question}`} >
        view single card
      </Link>
    </div> 
  );
}