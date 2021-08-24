// The Private instructor page

import React, { useEffect, useState } from "react";
import dummyData from "../dummy-data/classes";
import InstructorClasses from "./InstructorClasses";

export default function InstructorPage() {
  const [classes, setClasses] = useState([]);
  const [myClasses, setMyClasses] = useState([]);

  const myInstructorName = "Bob"; //not sure how this gets passed from instructor login?
  useEffect(() => {
    setClasses(dummyData);
  }, []);
  useEffect(() => {
    setMyClasses(classes.filter((item) => item.instructor_name === myInstructorName));
  }, [classes]);

  return (
    <div className="instructor-page-container">
      <h2>My Classes</h2>
      <button>Add a Class</button>

      <InstructorClasses classes={myClasses} />
    </div>
  );
}
