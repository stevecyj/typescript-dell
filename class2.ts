class Person {
  private name1: string;
  sayHi() {
    console.log('hi');
  }
}
const person = new Person();
person.name1 = 'JOJO';
console.log(person.name1);
person.sayHi();
