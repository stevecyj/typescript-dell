// getter and setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' Wang';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('JOJO');
// console.log(person.name);
// person.name = 'POPO Kao';
// console.log(person.name);

// 單例模式
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo('JOJO Wang');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
console.log(demo1 === demo2);
