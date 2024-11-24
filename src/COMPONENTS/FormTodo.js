import React, { useState } from "react";

function FormTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="px-4 py-1 sm:px-8">
      <div className="mb-5">
        <form
          onSubmit={handleAddTodo}
          className="flex flex-col sm:flex-row items-center gap-4 m-4 sm:m-10"
        >
          <h1 className="text-2xl font-bold mb-2 sm:mb-4 text-gray-700 text-center sm:text-left">
            Add Task
          </h1>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new task ..."
            className="text-lg flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="rounded-lg text-lg px-6 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 transition cursor-pointer w-full sm:w-auto"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormTodo;
