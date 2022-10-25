const teacherName: string = 'Dell Lee';
const teacherAge: number = 28.0;

const arr: number[] = [1, 2, 3];

const user: { name: string; age: number } = { name: 'dell', age: 18 };

function union(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

type User = { name: string; age: number };
const user2: User = { name: 'dell', age: 18 };
const user3: User = { name: 'dell', age: 16 };

// any
function showMessage(message: any): void {
  console.log(message);
}

// function
const def: (age: number) => number = (): number => {
  return 0;
};

// interface
interface Student {
  age: number;
  sex?: string;
}
const student: Student = {
  age: 15,
  sex: 'male'
};

interface OldStudent extends Student {
  name: string;
}

const OldStudent1: OldStudent = { age: 18, sex: 'male', name: 'JOJO' };

// 交叉類型
type Employee = User & { salary: number };
const Employee1: Employee = { name: 'jojo', age: 19, salary: 1800 };

// 斷言
const dom: unknown = document.getElementById('#root') as unknown;
const dom1: unknown = <unknown>document.getElementById('#root');

// 字面量類型
const str: 'as-string' = 'as-string';
function getPosition(position: 'left' | 'left'): string {
  return position;
}
getPosition('left');

const truthy: true = true;

// 字面量qa
function request(url: string, method: 'GET' | 'POST'): string {
  return 'sending request';
}
const params: { url: string; method: string } = {
  url: 'immoc.com',
  method: 'GET'
};
request(params.url, params.method as 'GET');
