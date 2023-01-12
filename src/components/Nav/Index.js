import React from "react";
import "./nav.css";
import {Button} from 'semantic-ui-react'

const Nav = () => {
  return (
    <header>
      <div> 
    <ul>
        <li className="logo">Quizlet Dupe</li>
     
      <li className="navButton">
        <a href="/Home">
          <Button color="blue">
            Home
          </Button>
        </a>
      </li>
      <li className="navButton">
        <a href="/OneSet">
          <Button color="blue">
            Libraries
          </Button>
        </a>
      </li>
      <li className="navButton">
        <a href="/SingleSet">
          <Button color="blue">
           SingleSet
          </Button>
        </a>
      </li>
      <li className="navButton">
        <a href="/LoginPages">
          <Button color="blue">
            Login/Signup
          </Button>
        </a>
      </li>
    </ul>
    </div>
    </header>
    
  );
};

export default Nav;
