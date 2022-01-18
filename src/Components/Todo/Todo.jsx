import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({todo,completeHandler,deleteHandler}) {
  return (
    <div key={todo.id} className="todo">
      <li className={todo.isCompleted ? "completed" : "todo-item"}>
        {todo.text}
      </li>
      <button onClick={() => completeHandler(todo.id)} className="complete">
        <CheckIcon />
      </button>
      <button onClick={() => deleteHandler(todo.id)} className="trash">
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Todo;
