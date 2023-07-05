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


/* Functions & types */
function add(a: number, b: number): number {
  return a + b;
};
// 매개변수 뒤에 :number로 반환되는 값의 타입을 지정해줄수도 있음.
// 함수에서는 매개변수 뿐만 아니라 반환되는 값의 타입도 생각해야함!
// 하지만 마찬가지로 type reference가 사용되어 자동으로 반환되는 값의 타입을 지정해줌.
// 가능하다면 type reference 사용하며 불필요한 코드는 작성하지 않는게 좋음

function printOutput(value: any) {
  console.log(value);
};
// 위 printOutput 함수는 아무것도 반환하지 않음.
// 아무것도 반환하지 않을 때 반환 타입은 'void'.
// void는 함수가 어떠한 값도 반환하지 않음을 뜻함
// void는 null, undefined와 비슷하지만 항상 함수와 결합해서 사용해야 함!


/* Generics */
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
};
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
updatedArray[0].split('');
// 코드에서는 오류로 뜨지 않지만 실행시키면 error가 발생함.
// updatedArray의 인자는 모두 숫자인데 split은 string 객체에 사용할 수 있는 method기 때문.
// ts에서는 왜 인식하지 못하나? utils 함수에 any로 지정했기 때문!
// 그렇다고 utils 함수를 number로 지정하면 다른 곳에서 string 함수 배열에 사용할 수 없기 때문에 수정해주지 않을 거임.
// 이러한 문제 해결을 위해 사용하는 것이 'generics'

// insertAtBeginning 함수를 generic 함수로 바꿔보자.
// <> 사이에 generic Type 지정. T는 type의 약자. 다른 식별자를 사용해도 됨!
// generic Type은 함수안에서만 사용될 타입
function insertAtBeginning2<T>(array: any[T], value: T) {
  const newArray = [value, ...array];
  return newArray;
};
const updatedArray2 = insertAtBeginning2(demoArray, -1);
// generic 타입을 지정해주면 위의 코드에서 ts가 한번 더 깊이 확인한다.
// any 타입이 아니라는 것을 generic 타입을 통해 알려줬기 때문에
// 매개변수의 값으로 주어진 값의 type이 어떤건지 확인한다.
// 하지만 generic 함수를 통해 array와 value의 타입이 동일하다는 것은 알려줬다.
// 그래서 string으로 해도 함수가 적용된다!
const stringArray = insertAtBeginning2(['a', 'b', 'c'], 'd');
const testArray = insertAtBeginning2(demoArray, '2');