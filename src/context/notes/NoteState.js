import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "652cb8988a3ab61d4c38222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "65309052bbdb9e302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb89868a3ab61d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e7302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb8988a3ab681d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e9302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb8988a3ab61d4uc8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e302faf5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
  ];
  //Add Note
  const addNote = (title, description, tag) => {
    //TODO API CALLdaily
    console.log("Adding a new note");
    const note = {
      _id: "6530902bbdb9e302faf5e2985",
      user: "652baeba2629cf4298fe7117",
      title: title,
      description: description,
      tag: tag,
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = (id) => {
    //TODO API CALL
    console.log(`Deleting the node with id ${id}`);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = (id, title, description, tag) => {};
  //-------------------------------
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}{" "}
    </NoteContext.Provider>
  );
};
export default NoteState;
