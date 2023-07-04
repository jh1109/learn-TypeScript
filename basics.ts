// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

/* 
<Primitives type>
-> number, string, boolean, null, undefined, symbol 
*/
let age: number;
age = 12.3;
// age = '12';

let userName: string = 'nora';

let isInstructor: boolean;
isInstructor = true;

// let hobbies: null;
// hobbies = 'exercise';


/* More complex types => array & object */

let hobbies: string[]; // 문자열 배열 타입
let ages: number[]; // 숫자형 배열 타입
let isTrue: boolean[]; // 숫자형 배열 타입
hobbies = ['수영하기', '운동하기', '요리하기'];
ages = [1, 2, 3, 4];
isTrue = [true, false, false];

// type을 지정하지 않는다면 기본 'any'로 지정됨 -> 어떤 값이든 지정될 수 있다는 의미
let person;
let user: {
  name: string;
  age: number;
}

let users: {
  name: string;
  age: number;
}[] = [{ name: 'nora', age: 28 }, { name: 'Max', age: 30 }];