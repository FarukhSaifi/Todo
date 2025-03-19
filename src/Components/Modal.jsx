import React, { useEffect, useRef, useState } from "react";

function Modal({ isOpen, closeModal, todo, saveTodo }) {
  const modalRef = useRef(null);
  const [editedTodo, setEditedTodo] = useState(todo || null);

  // Focus management: When modal is open, set focus to the first focusable element inside the modal
  useEffect(() => {
    if (isOpen) {
      const firstInput = modalRef.current.querySelector("input");
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [isOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  // Handle changes to the input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({ ...todo, [name]: value });

    console.log(editedTodo);
  };

  // Handle saving the edited todo
  const handleSave = () => {
    if (editedTodo?.text?.trim()) {
      saveTodo(editedTodo); // Pass the updated todo to the parent
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        aria-hidden="true"
        onClick={closeModal} // Close the modal if clicking outside
      ></div>

      {/* Modal content */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={modalRef}
            className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left text-white shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            {/* Modal header */}
            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  {/* Icon can go here */}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold text-gray-100"
                    id="modal-title"
                  >
                    Edit Todo
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Edit the text of the to-do item below:
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal body with input field */}
            <div className="px-4 py-3 sm:px-6">
              <input
                type="text"
                name="text"
                value={editedTodo?.text}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="Edit Todo"
              />
            </div>

            {/* Modal footer */}
            <div className="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-300 ring-1 shadow-xs ring-gray-500 ring-inset hover:bg-gray-700 sm:mt-0 sm:w-auto"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
