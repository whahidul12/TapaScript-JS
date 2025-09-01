//Constructor Function
function Car(name, model) {
  this.name = name;
  this.model = model
}
const mk4 = new Car('supra', 'mk4')
console.log(mk4);

//Object

const person = new Object();
person.name = 'whahid'
person.alive = true
console.log(person);

//Factory Funtion
function createUser(name, age) {
  return {
    name,
    age
  }
}
const per1 = createUser('bob', 23)
const per2 = createUser('jon', 45)
console.log(per1);
console.log(per2);

//class
class Cars {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  drive() {
    console.log(`${this.name} ${this.model} is driving.`);
  }
}

const mk5 = new Cars('Supra', 'MK5');
mk5.drive();

//===================================================
//===================================================
let fruit = { name: 'mango' }
const fruit2 = { name: 'mango' }
fruit = fruit2

console.log(fruit === fruit2);
//===================================================
//===================================================

//Staic methods

const target = { p: 1, x: 2 }
const source = { a: 3, b: 4 }
const math = { x: 5, y: 6 }
const combine = Object.assign(target, source, math)
console.log(combine);

//===================================================
//===================================================

//shallow clone

const obj3 = {
  a: 1,
  b: { c: 2 }
}
const obj4 = Object.assign({}, obj3)

obj4.a = 100
obj4.b.c = 3
console.log(obj3.b.c);
console.log(obj4.b.c);
console.log(obj3.a);
console.log(obj4.a);
console.log(obj4 == obj3);

//===================================================
//===================================================

//Deep clone

const obj5 = structuredClone(obj3)

obj5.a = 111
obj5.b.c = 333
console.log(obj3.b.c);
console.log(obj5.b.c);
console.log(obj3.a);
console.log(obj5.a);
console.log(obj5 == obj3);

//===================================================
//===================================================

//Object to Array

const myObj = {
  a: 'whahid',
  b: 21
}
const myArr = Object.entries(myObj)
console.log(myArr);

//===================================================
//===================================================

//Array to Objects

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])
const objEntries = Object.fromEntries(entries)
console.log(objEntries);

//===================================================
//===================================================

//Frezz (mutable / immutable)

const emp = {
  sal: 100
}
Object.freeze(emp);
emp.sal = 200;
emp.age = 21;
console.log(emp);
console.log(Object.isFrozen(emp));

//Seal (mutable / immutable)

const dept = {
  age: 50
}
Object.seal(dept)
dept.age = 33;
dept.name = 'whahid';
delete dept.age;
console.log(dept);

//===================================================
//===================================================

//hasOwn()

const search = {
  age: 23
}
console.log(Object.hasOwn(search, 'age'));
console.log(Object.hasOwn(search, 'name'));

//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================


//...............Object destructuring................


//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================

//................Optional Chaining..................

const aaa = false && 'whahid';
console.log(aaa);
