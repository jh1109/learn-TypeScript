import React, { useRef } from 'react';

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // onClick 이벤트일 경우는 event: React.MouseEvent
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // !는 해당 값이 null일수 있지만 현재 시점에서는 null이 될 수 없다는 확신의 의미다.
    // 100% 확신할 때만 ! 붙여주기.
    // 확신하는 상황이 아니라면 자동완성으로 ? 가 추가될 것이다.
    // 만약 submitHandler 안이 아니라, instance에서 value을 참조하려고 하면 null이 될 수도 있다.
    // 아직 ref를 연결하기 전이므로! ref는 return하는 <input>에 연결되어 있으니까!
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
};

export default NewTodo;