import React from 'react';  
import './notfound.css';
import NFImg from "../../assets/images/not-found.svg"
const NotFound = () => { 

  return (
    <>
    <div className="container">
      <div className="flex jc-center">
      <div className="content">
            <h6  className="mb-0 mr-4 mt-2">
              404: The page you are looking for isn’t here
            </h6>
            <h6  className="mb-0 mr-4 mt-2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </h6>
            <img
              alt="Under development"
              className="image"
              src={NFImg}
            />
          </div>
      </div>
    </div>
    </>
       
    
  );
};

export default NotFound;

 