// 物件類型和物件解構要分清楚
function showPerson({
  name = 'JOJO',
  age = 30
}: {
  name: string;
  age: number;
}) {
  console.log(name);
  console.log(age);
}

// interface readonly
interface Person {
  readonly name: string;
  age: number;
}
const jojo: Person = { name: 'jojo', age: 30 };
jojo.name = 'ojoj';
jojo.age = 36;

// 如何給物件擴展屬性
interface ArrayObject {
  length: number;
  [key: string]: string | number;
}
const obj: ArrayObject = {
  length: 0,
  abc: '123',
  0: '123'
};

// 物件類型繼承
interface Animal {
  name: string;
  age: number;
  breath: () => void;
}
interface Dog extends Animal {
  bark: () => void;
}

const animal: Animal = {
  name: 'panda',
  age: 1,
  breath: () => {}
};
const dog: Dog = {
  name: 'panda',
  age: 1,
  breath: () => {},
  bark: () => {}
};

// 多個物件類型同時進行繼承，儘量優先用 interface
interface Circle {
  radius: number;
}
interface Colorful {
  color: string;
}

interface ColorfulCircle extends Circle, Colorful {}
const colorfulCircle: ColorfulCircle = {
  radius: 1,
  color: 'red'
};

// 交叉類型
type ColorfulCircleOne = Circle & Colorful;

const colorfulCircleOne: ColorfulCircleOne = {
  radius: 1,
  color: 'red'
};
