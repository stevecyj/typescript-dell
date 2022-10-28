// readonly
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const person = new Person('JOJO');
// person.name = 'Hello';
// console.log(person.name);

// 抽象類

abstract class Geom {
  width: number;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}
class Circle extends Geom {
  getArea() {
    return 123;
  }
}
class Square {}
class Triangle {}
