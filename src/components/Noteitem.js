import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique quibusdam rerum aliquid ipsam veniam
            asperiores, nihil, veritatis, eaque laudantium porro doloremque
            nobis.
          </p>
          <i
            className="fa-regular fa-trash-can fa-shake mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>{" "}
          <i className="fa-regular fa-pen-to-square fa-shake mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
