import React from "react";
import { DeleteIcon, EditIcon } from "../icon-svg";
import Checkbox from "./CheckBox";

function ListItem({
  todo,
  toggleCompletion,
  handleEditTodo,
  handleDeleteTodo,
}) {
  return (
    <div
      key={todo.id}
      className="flex items-center justify-between p-3 rounded-lg border bg-card border-border"
    >
      <div className="flex items-center gap-3 flex-1">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-primary">
          <Checkbox todo={todo} onCheckboxChange={toggleCompletion} />
        </button>

        <span className="">{todo.text}</span>
        {/* <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ml-2 bg-green-500/10 text-green-500 hover:bg-green-500/20">
          low
        </div> */}
      </div>

      <div className="flex gap-1">
        <button
          onClick={() => handleEditTodo(todo.id)}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <EditIcon />
        </button>

        <button
          onClick={() => handleDeleteTodo(todo.id)}
          className=" ml-4 text-red-500 hover:text-red-700 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
