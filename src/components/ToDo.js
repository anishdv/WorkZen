import React, { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const addTodo = () => {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const completeTodo = (index) => {
    const completedTodo = todos[index];
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  return (
    <div className="bg-violet-00 p-4 shadow rounded-lg h-full">
      <h2 className="text-xl text-center font-semibold mb-4 text-white">
        ToDo List
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new To-Do"
          className="w-full p-2 rounded border"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <div className="flex justify-center pt-2 mb-8">
          <button
            onClick={addTodo}
            className=" text-white p-2 ml-2 rounded bg-violet-500 hover:bg-violet-900"
          >
            Add
          </button>
        </div>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 text-white flex justify-between">
            <h1 className="text-2xl">{todo}</h1>
            <div>
              <button
                onClick={() => completeTodo(index)}
                className="bg-violet-500 text-white p-2 ml-2 rounded hover:bg-violet-900"
              >
                Complete
              </button>
              <button
                onClick={() => removeTodo(index)}
                className="text-white p-2 ml-2 rounded bg-gray-400 hover:bg-gray-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      {completedTodos.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Completed Tasks</h3>
          <ul>
            {completedTodos.map((task, index) => (
              <li key={index} className="mb-2">
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToDo;
