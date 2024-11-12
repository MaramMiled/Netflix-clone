import React, { useState, useEffect } from 'react';

import "./Nav.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    }else{
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
        <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img 
        onClick={() => history.push("/")}
        className="nav_logo" 
        src='https://loodibee.com/wp-content/uploads/Netflix-logo.png' 
        alt=''/>

        <img 
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        src='https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png' 
        alt=''/>       
      </div>   
    </div>
  )
}

export default Nav;
