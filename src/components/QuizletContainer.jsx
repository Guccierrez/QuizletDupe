import React, { useState } from 'react';
import Login from './Pages/LoginPages/Login';
import Homepage from './Pages/Homepage/Homepage';
import SingleSet from './Pages/OneSet/SingleSet';
import Nav from './Nav/Index'

  
  function QuizletContainer() {

    const [currentPage, setCurrentPage] = useState('Login');
  
    const renderPage = () => {
      if (currentPage === 'Login') {
        return <Login/>;
      }
      if (currentPage === 'Homepage') {
        return <Homepage />;
      }
      if (currentPage === 'SingleSet') {
        return <SingleSet/>;
      }
      return <Login/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    )
  }
  
  export default QuizletContainer
  

  