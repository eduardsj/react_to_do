import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddNote from "./components/add-note.component";
import Note from "./components/note.component";
import NotesList from "./components/notes-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/notes"} className="navbar-brand">
            To Do app
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/notes"} className="nav-link">
                Notes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<NotesList/>} />
            <Route path="/notes" element={<NotesList/>} />
            <Route path="/add" element={<AddNote/>} />
            <Route path="/notes/:id" element={<Note/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
