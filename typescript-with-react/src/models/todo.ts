// .tsx은 TypeScript의 컴포넌트 파일 형식(JSX를 사용하므로 .tsx 파일 형식 사용)

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;