import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="/">
            TodoList
          </a>
        </div>
      </nav>
      <h2 className="text-center my-4 animated infinite pulse">
        What's The Plan ?
      </h2>
      <AddTodo />
    </div>
  );
}

export default App;
