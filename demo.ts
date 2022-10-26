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

// null,undefined
const testObject: null = null;
const testObject1: null = undefined;
const testUndefined: undefined = null;

function checkNull(abc: string | null) {
  if (typeof abc === 'string') {
    console.log(abc.toUpperCase());
  }
}

// void
function getNumber(): void {
  return;
}

// 只要是變數、物件，都應該有明確的類型
const userName: string = 'JOJO';
userName.toUpperCase;

// 類型註解
const userName1: string = '123';

// 類型推斷
const userAge = 18;
// 如果能夠自動推斷出來類型，就沒必要報手寫類型註解
let nickName = 'JOJO';

// 自動推斷出 return number
function getTotal(paraOne: number, paraTwo: number) {
  return paraOne + paraTwo;
}
getTotal(1, 2);

// 強制改成另一個類型
// 如果推斷不出來或不準確，再手寫
const userInfo: {
  name: 'JOJO';
  age: number;
} = {
  name: 'JOJO',
  age: 18
};

// 類型收窄
function uppercase(content: string | number) {
  if (typeof content === 'string') {
    return content.toUpperCase();
  }
  return content;
}

// 真值收窄
function getString(content?: string) {
  if (content) {
    return content.toUpperCase;
  }
}

// 相等收窄
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    return x.toUpperCase();
  }
}

// 物件解構怎麼寫
function getObjectValue({ a, b }: { a: string; b: number }) {
  return a + b;
}
getObjectValue({ a: '1', b: 2 });
