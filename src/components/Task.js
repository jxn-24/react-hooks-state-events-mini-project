import React from "react";

function Task({ text, category, onDelete }) { 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button> {/* onDelete called on click */}
    </div>
  );
}

export default Task;
