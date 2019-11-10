import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center">
        <ul className="list-group col-md-6 ">
          {this.props.allItem.map((one, id) => (
            <li
              id={id}
              key={id}
              onClick={() => this.props.onDelete(id)}
              className="list-group-item"
            >
              {one}
            </li>
          ))}
        </ul>
        {console.log(`AllITem: ${this.props.allItem}`)}
      </div>
    );
  }
}

export default TodoList;
