import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Update = () => {

    const Navigate = useNavigate();
    const go = () => {
      Navigate(-1);
    };
  
  
  return (
    <div>
      
        
        <div className="form">
        <div className="innerform">
       
          <form action="" >
            <label className="label" htmlFor="name">
              Name :{" "}
            </label>
            <input
              type="text"
          
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="age">
              Age :{" "}
            </label>
            <input
              type="text"
            
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="course">
              Course :{" "}
            </label>
            <input
              type="text"
          
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="batch">
              Batch :{" "}
            </label>
            <input
              type="text"
           
              className="text-input"
            />
            <br></br>
            <br></br>
            <div className="perent-button">
                <div><button className="button" onClick={go}>
              cancel
            </button></div>
            <div><Link to="/student">
              <button className="button">update</button>
            </Link></div>

            </div>
          </form>
        </div>
      </div>
      <div>

      
      
    </div>
    </div>
  )
}

export default Update