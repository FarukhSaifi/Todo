# Todo App

## Description

This Todo App allows users to add, edit, and mark tasks as completed. The app has a modern, responsive design with a smooth user experience, utilizing modal pop-ups for editing tasks. The app also supports dynamic interactions with checkboxes, custom emojis, and smooth transition effects for a polished user interface.

## Features

- **Add Tasks**: Easily add new tasks to your todo list.
- **Edit Tasks**: Update and edit your tasks using a modal with a text input field.
- **Delete Tasks**: Option to delete tasks from the todo list.
- **Checkbox for Completion**: Mark tasks as completed or incomplete using checkboxes.
- **Dynamic Emojis**: Randomly assigned emojis for each task to give it a fun, personalized touch.
- **Modal Animations**: Smooth fade and slide-in animations for modal dialogs and background transitions.
- **Responsive**: The app is fully responsive, ensuring a great user experience across devices.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: React's useState and useEffect hooks
- **Animations**: Tailwind CSS transition utilities
- **Icons**: Custom emojis dynamically assigned to each todo item

## Installation

### 1. Clone the repository

`git clone https://github.com/FarukhSaifi/Todo.git`

### 2. Navigate to the project directory

`cd todo-app`

### 3. Install dependencies

If you haven't already, you will need `npm` or `yarn` to manage dependencies. Install the required dependencies using the following command:

`npm install` or `yarn install`

### 4. Run the application

Start the application locally with: `npm start` or `yarn start`

Your app will be available at <http://localhost:3000>.

## Usage

1. **Adding a Todo**: Click the "Add Todo" button to open a modal where you can enter a task description and click "Save" to add it to the list.

2. **Editing a Todo**: Click on the "Edit" button next to a task to open the modal where you can modify the task. Click "Save" to confirm changes.

3. **Marking a Todo as Completed**: Use the checkbox next to each task to mark it as completed. The task will visually update to indicate that it's finished.

4. **Deleting a Todo**: When a task is completed, or if you wish to delete it manually, there is an option to delete the task from the list.

5. **Emojis**: Each todo item is automatically assigned a random emoji when it's created, adding a fun touch to your tasks.

## Folder Structure

`todo-app/ │ ├── public/ # Static files like index.html and assets ├── src/ # React app files │ ├── components/ # All React components (Modal, Todo, etc.) │ ├── App.js # Main app component │ ├── index.js # Entry point for React │ └── tailwind.config.js # Tailwind configuration └── package.json # Project dependencies and scripts`

## Contributions

Contributions are welcome! If you have suggestions or want to add new features, feel free to fork the repo, create a branch, and submit a pull request.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push your changes (`git push origin feature-name`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework that makes styling efficient and clean.
- Thanks to [React.js](https://reactjs.org/) for providing an easy-to-use, component-based structure for building the app.
