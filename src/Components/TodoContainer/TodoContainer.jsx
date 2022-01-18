import React from "react";
import Todo from "../Todo/Todo";
import "./TodoContainer.css";

function TodoContainer({ todos, setTodos, filterdTodos }) {
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterdTodos.map((todo) => (
          <Todo
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoContainer;
