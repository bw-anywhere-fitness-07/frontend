// The Private instructor page

import React, { useEffect, useState } from "react";
import dummyData from "../dummy-data/classes";
import InstructorClasses from "./InstructorClasses";
import "../styles/InstructorPage.css";

const initialClassValues = {
  id: "",
  instructor_name: "", // : name from whoever is signed in?
  type: "",
  date: "",
  time: "",
  duration: "",
  intensity: "",
  location: "",
  capacity: "",
  registered: 0,
};

export default function InstructorPage() {
  // const [classes, setClasses] = useState(dummyData);
  const [myClasses, setMyClasses] = useState(dummyData);
  const [addClass, setAddClass] = useState(false);
  const [createClass, setCreateClass] = useState(initialClassValues);

  const myInstructorName = "Bob"; //not sure how this gets passed from instructor login?
  // useEffect(() => {
  //   setClasses(dummyData);
  // }, []);
  // useEffect(() => {
  //   setMyClasses(classes.filter((item) => item.instructor_name === myInstructorName));
  //   setMyClasses(classes.filter((item) => item));
  // }, []);

  const onClick = () => {
    setAddClass(!addClass);
  };

  const handleChanges = (event) => {
    const { value, name } = event.target;
    setCreateClass({ ...createClass, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createNewClass();
  };
  const createNewClass = () => {
    const newClass = {
      id: "?",
      instructor_name: createClass.instructor_name, // : name from whoever is signed in?
      type: createClass.type,
      date: createClass.date,
      time: createClass.time,
      duration: createClass.duration,
      intensity: createClass.intensity,
      location: createClass.location,
      capacity: createClass.capacity,
      registered: 0,
    };
    setMyClasses([...myClasses, newClass]); // once server is up, axios.put instead, and set classes with useEffect up above?
    setAddClass(false);
    setCreateClass(initialClassValues);
  };

  return (
    <div className="instructor-page-container">
      <h2>My Classes</h2>
      <div className="btn-contain">
        <button className="inst-btn" onClick={onClick}>
          Add a Class
        </button>
        {addClass && (
          <div className="addClass">
            <form onSubmit={onSubmit} className="form-add-class">
              <input type="text" name="type" value={createClass.type} placeholder="type" onChange={handleChanges} />
              <input type="text" name="date" value={createClass.date} placeholder="date" onChange={handleChanges} />
              <input type="text" name="time" value={createClass.time} placeholder="time" onChange={handleChanges} />
              <input
                type="text"
                name="duration"
                value={createClass.duration}
                placeholder="class length"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="intensity"
                value={createClass.intensity}
                placeholder="difficulty level"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="location"
                value={createClass.location}
                placeholder="location"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="capacity"
                value={createClass.capacity}
                placeholder="class size"
                onChange={handleChanges}
              />
              <button>create class</button>
            </form>
          </div>
        )}
      </div>
      <InstructorClasses classes={myClasses} setClasses={setMyClasses} />
    </div>
  );
}
