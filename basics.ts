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


/* Type inference(타입 추론) */

let course = ' React - The Complete Guide';
// course = 123;
// type을 지정하지 않았는데, 왜 error 가 발생했을까?
// js 파일에서는 위와 같이 코드를 작성해도 error가 발생하지 않음!
// => type inference가 사용된 것임!
// js는 최대한 많은 자료형 타입을 해당 코드에 맞게 사용하려고 하지만,
// ts는 처음에 값을 할당하면 해당 type으로 자료형을 인식함.
// => 이렇게 type inference를 활용해서 코드를 작성하는 것이 권장됨.
// 타입을 불필요하게 추가로 지정하지 않아도 되니까!

/* 하나의 변수에 두가지 타입을 지정해야 한다면? */
// 한가지 변수에 한개 이상의 타입을 지정해 주는 기능 -> 유니온(union) 타입
let union: string | number | boolean = 'Hello, world';
union = 12;
union = true;
// union type을 사용하는 거면 type inference 사용처럼 기본으로 할당한 값에 대한 자료형을 생략하면 안된다.
// 지정할 모든 type을 작성해주어야함!
let people: string | string[];

/* Type Alian(타입 별칭): 중복되는 타입 지정 */
// 아래의 type은 ts에서만 사용가능한 구문
type Person = {
  name: string;
  age: number;
};
let user1: Person;
let user2: Person;
let usersArray: Person[];
usersArray = [{ name: 'nora', age: 28 }, { name: 'Max', age: 30 }];