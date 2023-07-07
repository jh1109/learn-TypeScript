import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // never[] : 항상 빈 배열이어야한다는 뜻
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodo: string) => {
    setTodos(todos => todos.concat(new Todo(newTodo)));
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
