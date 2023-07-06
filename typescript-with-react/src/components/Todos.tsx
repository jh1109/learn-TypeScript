import React from 'react';

// React.FC: @types/react 패키지에 정의되어 있는 타입(generic type)
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default Todos;