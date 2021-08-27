// The Private instructor page

import React, { useEffect, useState } from "react";
import dummyData from "../dummy-data/classes";
import InstructorClasses from "./InstructorClasses";
import "../styles/InstructorPage.css";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

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
  registered: 0
};

export default function InstructorPage() {
  // const [classes, setClasses] = useState(dummyData);
  const [myClasses, setMyClasses] = useState([]);
  const [addClass, setAddClass] = useState(false);
  const [createClass, setCreateClass] = useState(initialClassValues);

  const myInstructorName = "Bob"; //not sure how this gets passed from instructor login?

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
      // : name from whoever is signed in?
      name: "ClassName",
      type: createClass.type,
      // date: createClass.date,
      start_time: createClass.time,
      duration_minutes: createClass.duration,
      intensity_level: createClass.intensity,
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

    setMyClasses(myClasses.filter((item) => item.id !== courseId));

    // ======================
    // ALSO need to post-delete or (delete request based on server end) class from server by this same Id
  };

  const saveChanges = (editCourse) => {
    setMyClasses(
      myClasses.map((myClass) => {
        if (myClass.class_id === editCourse.id) {
          return editCourse;
        }

        return myClass;
      })
    );
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
              {/* <input type="text" name="date" value={createClass.date} placeholder="date" onChange={handleChanges} /> */}
              <input
                type="datetime-local"
                name="time"
                value={createClass.time}
                placeholder="time"
                onChange={handleChanges}
              />
              <input
                type="text"
                name="duration"
                value={createClass.duration}
                placeholder="length (in min)"
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
              <button className="createClassBtn">create class</button>
            </form>
          </div>
        )}
      </div>
      <InstructorClasses classes={myClasses} saveChanges={saveChanges} deleteClass={deleteClass} />
    </div>
  );
}
