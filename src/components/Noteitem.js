import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique quibusdam rerum aliquid ipsam veniam
            asperiores, nihil, veritatis, eaque laudantium porro doloremque
            nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
