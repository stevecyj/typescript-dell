// extends
interface Person {
  name: string;
}

function getName<Type extends Person>(person: Type) {
  return person.name;
}

getName({ name: 'jojo', age: 30 });

// keyof 指物件類型中的某一項
interface Teacher {
  name: string;
  age: number;
  sex: 'male' | 'female';
}

const teacher: Teacher = {
  name: 'jojo',
  age: 30,
  sex: 'male'
};

function getTeacherInfo<T extends keyof Teacher>(teacher: Teacher, key: T) {
  return teacher[key];
}
getTeacherInfo(teacher, 'age');
