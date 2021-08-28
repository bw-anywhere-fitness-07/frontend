import React, { useState } from "react";

export default function EditClass(props) {
  const { deleteClass, course, saveChanges } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editCourse, setEditCourse] = useState(course);

  const onSubmit = () => {
    console.log("saving changes...");
    setIsEditing(false);
    saveChanges(editCourse);
  };

  const onChange = (event) => {
    console.log(event.target.value);
    setEditCourse({ ...editCourse, [event.target.name]: event.target.value });
  };

  if (isEditing) {
    return (
      <form onSubmit={onSubmit}>
        <div className="edit-card">
          <label>
            Class name
            <input type="text" name="name" value={editCourse.name} onChange={onChange} />
          </label>
          <label>
            Class Type
            <input type="text" name="type" value={editCourse.type} onChange={onChange} />
          </label>
          {/* <label>
            Date
            <input type="text" name="date" value={editCourse.date} onChange={onChange} />
          </label> */}
          {/* <label>
            Time
            <input type="text" name="time" value={editCourse.time} onChange={onChange} />
          </label> */}
          <label>
            Length <input type="text" name="duration_minutes" value={editCourse.duration_minutes} onChange={onChange} />
          </label>
          <label>
            Difficulty
            <input type="text" name="intensity_level`" value={editCourse.intensity_level} onChange={onChange} />
          </label>
          <label>
            Location
            <input type="text" name="location" value={editCourse.location} onChange={onChange} />
          </label>
          {/* registered: <input type="text" name="registered" value={editCourse.registered} onChange={onChange} /> */}
          <label>
            Size
            <input type="text" name="max_attendees" value={editCourse.max_attendees} onChange={onChange} />
          </label>
          <button>save changes</button>
        </div>
      </form>
    );
  }
  return (
    <div className="course-card">
      <h4>{course.name}</h4>
      <div>
        <div>{course.type}</div>
        <div>{course.start_time}</div>
        <div>{course.duration_minutes} min</div>
        <div>level: {course.intensity_level}</div>
        <div>location: {course.location}</div>
        <div>
          registered: {course.registered}/{course.max_attendees}
        </div>
      </div>
      <button
        id={course.class_id}
        className="edit-btn"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        edit
      </button>
      <button className="edit-btn" onClick={deleteClass}>
        delete
      </button>
    </div>
  );
}
