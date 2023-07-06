import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

// React.FC: @types/react 패키지에 정의되어 있는 타입(generic type)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => <TodoItem item={item} />)}
    </ul>
  );
};

export default Todos;