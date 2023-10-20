import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "652cb8988a3ab61d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb8988a3ab61d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb8988a3ab61d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
    {
      _id: "652cb8988a3ab61d4c8222fa",
      user: "652baeba2629cf4298fe7117",
      title: "video updates2",
      description: "Please watch the video updated",
      tag: "mp4",
      date: "2023-10-16T04:14:16.649Z",
      __v: 0,
    },
    {
      _id: "6530902bbdb9e302af5e2985",
      user: "652baeba2629cf4298fe7117",
      title: "my note title",
      description: "Please workout daily",
      tag: "Personal",
      date: "2023-10-19T02:10:51.125Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}{" "}
    </NoteContext.Provider>
  );
};
export default NoteState;
