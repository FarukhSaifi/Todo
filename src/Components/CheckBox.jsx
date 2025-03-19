import React, { useEffect, useState } from "react";

const Checkbox = ({ todo, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);

  useEffect(() => {
    setIsChecked(todo.completed); // Update state when the todo is modified
  }, [todo.completed]);

  // Handle the checkbox click
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(todo.id); // Notify parent about the change
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Custom checkbox with onclick event */}
      <input
        id={`checkbox-${todo.id}`}
        type="checkbox"
        className="peer hidden"
        checked={isChecked}
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
              isChecked ? "block" : "hidden"
            }`}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
