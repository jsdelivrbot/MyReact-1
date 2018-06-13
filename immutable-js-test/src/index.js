import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Map, List, Record } from 'immutable';

// 1. 객체는 Map
const obj = Map({
    foo: 1,
    inner: Map({
        bar: 10
    })
})

console.log(obj.toJS());

// 2. 배열은 List
const arr = List([
    Map({ foo: 1 }),
    Map({ bar: 2 })
]);

console.log(arr.toJS());

// 3. 설정할 땐 set

let nextObj = obj.set('foo', 5);

console.log(nextObj.toJS());
console.log(nextObj !== obj);

// 4. 값을 읽을 땐 get

console.log(obj.get('foo'));
console.log(arr.get(0)); // List는 index를 parameter로 읽음

// 5. 읽은 다음에 설정 할 때는 update
// 두번째 파라미터로는 updater 함수가 들어가야함

nextObj = nextObj.update('foo', value => value + 1);
console.log('update', nextObj.toJS());

// 6. 내부에 있는걸 ~ 할 땐 In 을 붙인다
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log('setin', nextObj.toJS());
console.log("setin", nextObj.getIn(['inner', 'bar']));

// 7. List에서 사용시
let nextArr = arr.setIn([0, 'foo'], 10);
console.log('list setin', nextArr.getIn([0, 'foo']));

// 8. List 내장함수는 배열이랑 비슷하다
console.log('nextArr list', arr.toJS());
nextArr = arr.push(Map({ qaz: 3 }));
console.log('nextArr list', nextArr.toJS());

// 9. delete로 key 삭제
console.log('nextobj delete before', nextObj.toJS());
nextObj = nextObj.delete('foo');
console.log('nextobj delete', nextObj.toJS());

console.log('nextobj delete before', nextArr.toJS());
nextArr = nextArr.delete(0);
console.log('nextobj delete', nextArr.toJS());

const Person = Record({
    name: '젤리',
    age: 30
})

let person = Person();

console.log(person.name, person.age);

person = person.set('name', 'Jelly');
console.log(person.name); // Jelly

// 이건 오류 납니다: person.name = '철수';

// Record 에서 사전 준비해주지 않은 값을 넣어도 오류납니다.
// person = person.set('job', 5);

// 값을 따로 지정해줄수도 있습니다.
person = Person({
    name: '영희',
    age: 10
});

const { name, age } = person; // 비구조화 할당도 문제없죠.
console.log(name, age); // "영희" 10

// 재생성 할 일이 없다면 이렇게 해도 됩니다.
const dog = Record({
    name: '멍멍이',
    age: 1
})()

console.log(dog.name); // 멍멍이

// 이런것도 가능하죠.
const nested = Record({
    foo: Record({
        bar: true
    })()
})();

console.log(nested.foo.bar); // true

// Map 다루듯이 똑같이 쓰면 됩니다.
const nextNested = nested.setIn(['foo', 'bar'], false);
console.log(nextNested);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

