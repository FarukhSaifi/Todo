import React from "react";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="container d-flex justify-content-center">
      <ul className="list-group col-md-6 ">
        {todos.map((todo) => (
          <li
            id={todo.id}
            key={todo.id}
            onClick={() => onDelete(todo.id)}
            className="list-group-item"
          >
            {todo.title}
          </li>
        ))}
      </ul>
      {console.log(`AllITem: `, todos)}
    </div>
  );
};

export default TodoList;
