import React from "react";
import Form from '../Form/Form';
import "./TodoInput.css";

function TodoInput({ setInput, input, setTodos, todos, setStatus }) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 500,
        text: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  };

  return (
    <>
      <div>
        <header>
          <h1>TO DO-LIST</h1>
        </header>
        <Form 
          inputHandler={inputHandler}
          statusHandler={statusHandler}
          input={input}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default TodoInput;
