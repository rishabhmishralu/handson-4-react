import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Update = () => {
    const [name, setname] = useState();
    const [age, setage] = useState();
    const [course, setcourse] = useState();
    const [batch, setbatch] = useState();
    const [allEntry, setallEntry] = useState([]);
  
    const Navigate = useNavigate();
    const go = () => {
      Navigate(-1);
    };
  
    const submitform = (e) => {
      e.preventDefault();
      const newEntry = {
        name: name,
        age: age,
        course: course,
        batch: batch,
      };
      setallEntry([...allEntry, newEntry]);
      console.log(allEntry);
    };
  
  return (
    <div>
      
        
        <div className="form">
        <div className="innerform">
        {/* <div className="innerform"> */}
          <form action="" onSubmit={submitform}>
            <label className="label" htmlFor="name">
              Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="age">
              Age :{" "}
            </label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="course">
              Course :{" "}
            </label>
            <input
              type="text"
              name="course"
              value={course}
              onChange={(e) => setcourse(e.target.value)}
              className="text-input"
            />
            <br></br><br />
            <label className="label" htmlFor="batch">
              Batch :{" "}
            </label>
            <input
              type="text"
              name="batch"
              value={batch}
              onChange={(e) => setbatch(e.target.value)}
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