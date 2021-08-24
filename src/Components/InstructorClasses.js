// Instructor view of the classes with added features

import React from "react";

export default function InstructorClasses(props) {
  const { classes } = props;
  return (
    <div className="instructor-class-container">
      {classes.map((course) => {
        return (
          <div key={course.id}>
            <h4>{course.type}</h4>
            <div>
              <div>instructor: {course.instructor_name}</div>

              <div>date: {course.date}</div>
              <div>time: {course.time}</div>
              <div>length: {course.duration}</div>
              <div>level: {course.intensity}</div>
              <div>where? {course.location}</div>
              <div>
                registered: {course.registered}/{course.capacity}
              </div>
            </div>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
}
