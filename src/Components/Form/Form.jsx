import React from "react";

function Form({handleSubmit,input,inputHandler,statusHandler}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What's your plan for today?"
        value={input}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        +
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" id="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
