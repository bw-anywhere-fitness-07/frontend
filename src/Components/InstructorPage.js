// The Private instructor page

import React, { useEffect, useState } from "react";
import InstructorClasses from "./InstructorClasses";
import "../styles/InstructorPage.css";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialClassValues = {
  class_id: "",
  duration_minutes: "",
  instructor: "",
  intensity_level: "",
  location: "",
  max_attendees: "",
  name: "",
  start_time: "",
  type: ""
};

export default function InstructorPage() {
  const [myClasses, setMyClasses] = useState([]);
  const [addClass, setAddClass] = useState(false);
  const [createClass, setCreateClass] = useState(initialClassValues);

  // const myInstructorName = "Bob"; //not sure how this gets passed from instructor login?

  useEffect(() => {
    axiosWithAuth()
      .get("api/classes")
      .then((res) => {
        console.log(res.data);
        setMyClasses(res.data);
      });
  }, []);

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
      // instructor_name: createClass.instructor_name,
      name: "ClassName",
      type: createClass.type,
      start_time: createClass.start_time,
      duration_minutes: createClass.duration_minutes,
      intensity_level: createClass.intensity_level,
      location: createClass.location,
      max_attendees: createClass.capacity
      // registered: 0
    };

    axiosWithAuth()
      .post("api/classes", newClass)
      .then((res) => {
        console.log(res.data);
        setMyClasses([...myClasses, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });

    setAddClass(false);
    setCreateClass(initialClassValues);
  };

  const deleteClass = (courseId) => {
    console.log("deleting class...", courseId);
    axiosWithAuth()
      .delete(`api/classes/${courseId}`)
      .then(setMyClasses(myClasses.filter((item) => [item.course_id] !== courseId)));
  };

  const saveChanges = (editCourse) => {
    console.log("editing class", editCourse);
    axiosWithAuth()
      .put(`api/classes/${editCourse.class_id}`, editCourse)
      .then((res) => {
        console.log();
        setMyClasses(
          myClasses.map((myClass) => {
            if (myClass.class_id === editCourse.id) {
              return editCourse;
            }

            return myClass;
          })
        );
      });
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
              <input type="text" name="name" value={createClass.name} placeholder="name" onChange={handleChanges} />
              <input type="text" name="type" value={createClass.type} placeholder="type" onChange={handleChanges} />
              {/* <input type="text" name="date" value={createClass.date} placeholder="date" onChange={handleChanges} /> */}
              <input
                type="datetime-local"
                name="time"
                value={createClass.start_time}
                placeholder="time"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="duration_minutes"
                value={createClass.duration_minutes}
                placeholder="length (in min)"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="intensity_level"
                value={createClass.intensity_level}
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
                value={createClass.max_attendees}
                placeholder="class size"
                onChange={handleChanges}
              />
              <button className="createClassBtn">create class</button>
            </form>
          </div>
        )}
      </div>
      <InstructorClasses classes={myClasses} saveChanges={saveChanges} deleteClass={deleteClass} />
    </div>
  );
}
