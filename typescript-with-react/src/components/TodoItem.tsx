import React from 'react';

// React.FC는 key와 같이 특별한 역할을 가진 props를 사용할 수 있게 해준다.
// 그래서 TodoItem에 key를 props로 지정할 수 있는 것이다.
const TodoItem: React.FC<{ text: string }> = (props) => {
  return (
    <li>{props.text}</li>
  )
};

export default TodoItem;