// class Person {
//   protected name1: string;
//   sayHi() {
//     console.log('hi');
//   }
// }

// class Teacher extends Person {
//   sayHi(): void {
//     this.name1;
//   }
// }

// constructor
// class Person {
//   // public name1: string;
//   constructor(public name1: string) {
//     // this.name1 = name;
//   }
// }

// const person = new Person('MOMO');
// console.log(person.name1);

class Person {
  constructor(public name1: string) {}
}

class Teacher extends Person {
  constructor(public age: number) {
    super('JOJO');
  }
}

const teacher1 = new Teacher(28);
console.log(teacher1.age);
console.log(teacher1.name1);
