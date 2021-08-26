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
            Class Name
            <input type="text" name="type" value={editCourse.type} onChange={onChange} />
          </label>
          <label>
            Date
            <input type="text" name="date" value={editCourse.date} onChange={onChange} />
          </label>
          <label>
            Time
            <input type="text" name="time" value={editCourse.time} onChange={onChange} />
          </label>
          <label>
            Length <input type="text" name="duration" value={editCourse.duration} onChange={onChange} />
          </label>
          <label>
            Difficulty
            <input type="text" name="intensity" value={editCourse.intensity} onChange={onChange} />
          </label>
          <label>
            Location
            <input type="text" name="location" value={editCourse.location} onChange={onChange} />
          </label>
          {/* registered: <input type="text" name="registered" value={editCourse.registered} onChange={onChange} /> */}
          <label>
            Size
            <input type="text" name="capacity" value={editCourse.capacity} onChange={onChange} />
          </label>
          <button>save changes</button>
        </div>
      </form>
    );
  }
  return (
    <div className="course-card">
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
