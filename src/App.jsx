import { useState } from "react";
import ListItem from "./components/ListItem";
import Modal from "./components/Modal";
import { AddIcon } from "./icon-svg";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showEditTodoModal, setShowEditTodoModal] = useState({
    isOpen: false,
    todo: null,
  });

  // Handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  // Handle toggling completion status
  const toggleCompletion = (id) => {
    // Update the isChecked state for the specific item
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Handle deleting a todo
  const handleEditTodo = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setShowEditTodoModal((prevItems) => ({
      ...prevItems,
      isOpen: true,
      todo: editTodo,
    }));
  };

  // Handle deleting a todo
  const updateEditTodo = (todo) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === todo.id ? { ...item, ...todo } : item
      )
    );
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle Change a  new todo
  const handleChange = (e) => {
    const { value } = e.target;
    // Check if the value is a valid string and not just whitespace
    if (typeof value === "string" && value.trim() !== "") {
      setNewTodo(value);
    }
  };

  // Handle Close Modal
  const handleCloseModal = () => {
    setShowEditTodoModal(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto mt-8">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-bold tracking-tight text-2xl">Today's Tasks</h3>
          </div>

          <div className="p-6 pt-0">
            <div className="flex gap-2 mb-6">
              <input
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Add a new task..."
                defaultValue={newTodo}
              />
              <button
                onClick={addTodo}
                className="btn-primary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <AddIcon />
                Add
              </button>
            </div>

            {/* ListItem */}
            {todos.length === 0 ? (
              <div className="text-center text-xl py-8 text-muted-foreground">
                No tasks for today. Add a task to get started!
              </div>
            ) : (
              <div className="space-y-2">
                {todos?.map((todo) => (
                  <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleCompletion={toggleCompletion}
                    handleEditTodo={handleEditTodo}
                    handleDeleteTodo={handleDeleteTodo}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={showEditTodoModal?.isOpen}
        closeModal={handleCloseModal}
        todo={showEditTodoModal?.todo}
        saveTodo={updateEditTodo}
      />
    </>
  );
};

export default App;
