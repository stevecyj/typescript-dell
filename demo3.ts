// 有屬性的函數類型
interface FunctionWithAttributes {
  attr: string;
  (str: string): void;
}

const test: FunctionWithAttributes = (str: string) => {
  console.log(str);
};
test.attr = 'attributes';

// 構造函數的類型
interface ClassWithConstructor {
  new (str: string): void;
}
class TestOne {
  name: string;
  constructor(str: string) {
    this.name = str;
  }
}

function testOne(outerClass: ClassWithConstructor) {
  const instance = new outerClass('new');
}

testOne(TestOne);

// 如何寫 Date 的類型
interface DateType {
  new (): Date;
  (dateString: string): string;
}

// 函數泛型
function getArrayFirstItem<Type>(arr: Type[]) {
  return arr[0];
}

const numberArr = [1, 2, 3];
const result = getArrayFirstItem(numberArr);

const stringArr = ['1', '2', '3'];
const stringResult = getArrayFirstItem(stringArr);

// 函數重載，根據不同的參數，返回不同的結果
function getString(str: string): string;
function getString(str: string, str1: string): string;
function getString(str: string, str1?: string) {
  if (typeof str1 === 'string') {
    return str + str1;
  }
  return str;
}
