// 條件類型，讓函數重載更簡化
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

// function createLabel(key: string): NameLabel;
// function createLabel(key: number): IdLabel;
// function createLabel(key: string | number): IdLabel | NameLabel {
//   if (typeof key === 'string') {
//     return { name: key };
//   }
//   return { id: key };
// }
// const label = createLabel('jojo');

type IdOrNameLabel<T> = T extends number ? IdLabel : NameLabel;
function createLabel<T extends string | number>(key: T): IdOrNameLabel<T>;
function createLabel(key: string | number): IdLabel | NameLabel {
  if (typeof key === 'string') {
    return { name: key };
  }
  return { id: key };
}
const label = createLabel('jojo');
const label1 = createLabel(123);

// 條件類型其它應用
