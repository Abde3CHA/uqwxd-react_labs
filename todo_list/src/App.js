import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    // Logic to add a new todo to the list
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (index) => {
    // Logic to delete a todo from the list
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type="text" align="right" id='todoAdd' />
        <button type="submit" onClick={() => handleAddTodo("New Todo")}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
