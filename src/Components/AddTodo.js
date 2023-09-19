import React, { useState } from "react";
import TodoList from "./TodoList";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const additem = (e) => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: text,
    };
    if (text !== "") {
      setTodos([...todos, todo]);
    }
    setText("");
  };

  const deleteItem = (id) => {
    console.log(`Delete is ID ${id}`);
    let filterTodo = todos.filter((todo, index) => todo.id !== id);
    setTodos(filterTodo);
  };

  return (
    <React.Fragment>
      <div className=" d-flex justify-content-center">
        <div className="form-group col-md-6 text-center">
          <input
            type="text"
            className="form-control"
            value={text}
            name="search"
            placeholder="Enter The Tasks"
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                additem();
              }
            }}
          />
          <small
            id="helpId"
            className="form-text text-muted animated infinite pulse"
          >
            What's Your Plans ?
          </small>
        </div>

        <button type="button" onClick={additem} className="btn btn-dark">
          ADD <span className="badge  badge-primary">+</span>
        </button>
      </div>
      <TodoList todos={todos} onDelete={deleteItem} />
    </React.Fragment>
  );
};

export default AddTodo;
