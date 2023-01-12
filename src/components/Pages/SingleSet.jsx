import React from 'react';
import CardRendering from './CardRendering';
import data from "../../data"

export default function SingleSet() {
    let vocabCardArray = data
   
  return (
   
  <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
    {vocabCardArray.map((vocabCard)=> (
            <CardRendering id={vocabCard.id} question={vocabCard.question} answer={vocabCard.answer}
            />
          ))}
    </div>
  );
}




