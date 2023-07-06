import React from 'react';
import Todo from '../models/todo';

// React.FC: @types/react 패키지에 정의되어 있는 타입(generic type)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
};

export default Todos;