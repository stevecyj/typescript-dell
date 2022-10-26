// 有屬性的函數類型
interface FunctionWithAttributes {
  attr: string;
  (str: string): void;
}

const test: FunctionWithAttributes = (str: string) => {
  console.log(str);
};
test.attr = 'attributes';
