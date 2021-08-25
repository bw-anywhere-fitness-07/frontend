// Instructor view of the classes with added features

import React from "react";
import "../styles/InstructorClasses.css";

export default function InstructorClasses(props) {
  const { classes, setClasses } = props;

  const editClass = (courseId) => {
    console.log("editing class");
    console.log(courseId);
  };

  const deleteClass = (courseId) => {
    console.log("deleting class...", courseId);
    setClasses(classes.filter((item) => item.id !== courseId));

    // ======================
    // ALSO need to post-delete class from server by this same Id
  };

  return (
    <div className="instructor-class-container">
      {/* {console.log(classes)} */}
      {classes.map((course, index) => {
        return (
          <div className="course-card" key={index}>
            <h4>{course.type}</h4>
            <div>
              <div>
                {course.date} @ {course.time}
                <span> -- length: {course.duration}</span>
              </div>
              <div>level: {course.intensity}</div>
              <div>location: {course.location}</div>
              <div>
                registered: {course.registered}/{course.capacity}
              </div>
            </div>
            <button
              id={course.id}
              className="edit-btn"
              onClick={() => {
                editClass(course.id);
              }}
            >
              edit
            </button>
            <button
              className="edit-btn"
              onClick={() => {
                deleteClass(course.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
