import React, { Component } from "react";
import TodoList from "./TodoList";

class AddTodo extends Component {
  state = {
    // id: [],
    term: "",
    allItem: []
  };

  ItemHandler = e => {
    this.setState({ term: e.target.value });
  };

  additem = e => {
    this.setState({
      term: "",
      // id: Math.floor(Math.random() * 10),
      allItem: [...this.state.allItem, this.state.term]
    });
  };

  deleteitem = id => {
    console.log(`Delete is ID ${id}`);
    let allItem = this.state.allItem.filter((data, index) => index !== id);
    this.setState({ allItem });
  };

  render() {
    const { allItem, term } = this.state;
    return (
      <React.Fragment>
        <div className=" d-flex justify-content-center">
          <div className="form-group col-md-6 text-center">
            <input
              type="text"
              className="form-control"
              value={term}
              name="search"
              placeholder="Enter The Tasks"
              onChange={this.ItemHandler}
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.additem();
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
          <button onClick={this.additem} className="btn">
            ADD <span className="badge  badge-primary">+</span>
          </button>
        </div>
        <TodoList allItem={allItem} onDelete={this.deleteitem} />
      </React.Fragment>
    );
  }
}
export default AddTodo;
