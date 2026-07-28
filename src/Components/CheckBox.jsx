import React from "react";

const Checkbox = ({ todo, onCheckboxChange }) => {
  const handleCheckboxClick = () => {
    onCheckboxChange(todo.id);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Custom checkbox with onclick event */}
      <input
        id={`checkbox-${todo.id}`}
        type="checkbox"
        className="peer hidden"
        checked={todo.completed}
        onChange={handleCheckboxClick} // Using onChange to reflect changes
      />

      {/* Label for the checkbox */}
      <label
        htmlFor={`checkbox-${todo.id}`}
        className="flex items-center cursor-pointer"
      >
        {/* Custom checkbox design */}
        <span className="w-5 h-5 border-2 border-gray-400 rounded-md flex items-center justify-center peer-checked:bg-violet-500">
          {/* Custom checkmark when checked */}
          <span
            className={`w-3 h-3 bg-violet-500 rounded-full ${
              todo.completed ? "block" : "hidden"
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
