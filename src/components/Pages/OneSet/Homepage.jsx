import React from 'react';

export default function ({question, answer}) {
  
  return (
    <div className="card" style={{ padding:30, }}>
        <h5 className="card-title">Question: {question}</h5>
          <p className="card-text" style={{ visibility:'hidden' }} >Answer: {answer}</p>
    </div>
  );
}
