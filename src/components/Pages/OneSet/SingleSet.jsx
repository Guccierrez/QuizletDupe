import React from 'react';
import Home from './Homepage';

const vocabCardArray = [
  {
    question: 'what are the 6 primitive data types?',
    answer: 'strings, numbers, booleans, null, undefined, bigint, symbol'
},
{
    question: 'what are logical comparison operators',
    answer: '||, &&, >, !'
},
{
    question: 'What is a conditional statement',
    answer: 'an if or else/if statement'
},
{
    question: 'how would you describe a function?',
    answer: 'a reusable block of code that perform a specific task, they must be called in order to execute'
},
{
    question: 'what are parameters?',
    answer: 'Parameters give a name to the data to be passed into the function(x,y,z), arguments then give the paramaters their values(7,"hello",true)'
},
{
    question: 'what is scope',
    answer: 'scope is the accessibility of variables(global vs local)'
},
{
    question: 'what are methods',
    answer: 'actions that can be perfomed on an object example.upperCase()'
},
{
    question: 'what is the difference between let,const, and var',
    answer: 'Variables declared by let are only available inside the block where they are defined.Variables declared by var are available throughout the function in which they are declared'
},
{
    question: 'what is a fetch request',
    answer: 'fetch() is a method to request data from a server'
},
{
    question: 'What is an API',
    answer: 'Application Programming Interfaces, a means for 2 software components to communicate with another'
},
{
    question: 'What are some ways to refer to an html element through JS',
    answer: 'document.getElementById("example"), document.querySelectorAll(".container"), getElementsByClassName("example")'
},
{
    question: 'what is an event listener',
    answer: 'a way for a user to interact, it can be a click,button, hover etc'
},
{
    question: 'what are some ways to add an attribute to a value',
    answer: 'element.dataset.state = "animate" or element.setAttribute("data-state", "animate");'
},
{   question: 'What is node',
    answer: 'Nodejs allows Javascript code to run outside the browser'},
 {   question: 'What does the "return keyword do"',
    answer: 'Nodejs allows Javascript code to run outside the browser'},

]
;

export default function SingleSet() {
  return (
   
  <div style={{ display:"flex" }}>
    {vocabCardArray.map((vocabCard)=> (
            <Home question={vocabCard.question} answer={vocabCard.answer}
            />
          ))}
    </div>
  );
}




