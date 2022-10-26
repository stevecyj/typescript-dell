// 泛型
interface Box<Type> {
  content: Type;
}

const box: Box<string> = {
  content: 'box'
};

const box: Box<number> = {
  content: 123
};

// 使用泛型來擴展生成新的類型
type TypeOrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
// type OneOrManyOrNull<Type> = OneOrMany<Type> | null;
type OneOrManyOrNull<Type> = TypeOrNull<OneOrMany<Type>>;
const test: OneOrManyOrNull<string> = ['123'];

// 陣列和泛型
const numberArr: Array<string> = ['1', 2, 3];
