import { useEffect, useState } from 'react';
import TodoContainer from './Components/TodoContainer/TodoContainer';
import TodoInput from './Components/TodoInput/TodoInput';

function App() {

  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterdTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      if (status === 'completed') {
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true))
      }
      else if (status === 'uncompleted') {
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false))
      }
      else {
        setFilteredTodos(todos);
      }
    }
    filterHandler();
  }, [status, todos])

  return (
    <div className='app'>
      <TodoInput setStatus={setStatus} todos={todos} setTodos={setTodos} setInput={setInput} input={input} />
      <TodoContainer status={status} setTodos={setTodos} todos={todos} filterdTodos={filterdTodos} />
    </div>
  );
}

export default App;
