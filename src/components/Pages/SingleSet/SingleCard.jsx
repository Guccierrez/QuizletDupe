import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../../../data"


const SingleCard = () => {
  let params = useParams()
    let vocabCardArray = data
    let currentCard = vocabCardArray.find((vocabCard) => vocabCard = params);
    
    console.log(vocabCardArray);// what are the 6 primitive data types
  // console.log(params)

  



  return (
    <div>
   
    <h1>{currentCard.question}</h1>
    <p>{currentCard.answer}</p>
    </div>
  )
}

export default SingleCard



// import React from 'react';

// function MyComponent() {
//   const myArray = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       {myArray.map((item) => {
//         return <div key={item}>{item}</div>;
//       })}
//     </div>
//   );
// }

// export default MyComponent;