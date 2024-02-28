import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editID = props.note.id;
    props.onType(editID, "title", updatedValue);
  };

  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editID = props.note.id;
    props.onType(editID, "description", updatedValue);
  };

  const clickDelete = () => {
    props.removeNote(props.note.id);
  };
  return (
    <li className="note">
      {console.log(props)}
      <input
        type="text"
        placeholder="Title"
        value={props.note.title}
        className="note__title"
        onChange={updateTitle}
      />
      <textarea
        placeholder="Description..."
        value={props.note.description}
        className="note__description"
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default Note;
