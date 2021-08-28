// Instructor view of the classes with added features

import React from "react";
import "../styles/InstructorClasses.css";
import InstructorClass from "./InstructorClass";

export default function InstructorClasses(props) {
  const { classes, saveChanges, deleteClass } = props;

  return (
    <div className="instructor-class-container">
      {classes.map((course) => {
        // console.log(course.class_id);
        return (
          <InstructorClass
            key={course.class_id}
            saveChanges={saveChanges}
            deleteClass={() => deleteClass(course.class_id)}
            course={course}
          />
        );
      })}
    </div>
  );
}
