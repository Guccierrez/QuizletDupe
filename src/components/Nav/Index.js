import React from "react";
import "./nav.css";
import {Button} from 'semantic-ui-react'

const Nav = () => {
  return (
    <header>
      <div> 
        <div className="logo"><li>Quizlet Dupe</li></div>
    <ul>
     
      <li className="navButton">
        <a href="/Homepage">
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
