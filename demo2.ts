type Fish = {
  swim: () => {};
};

type Bird = {
  fly: () => {};
};

// in 語法下的類型收窄
function test(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}

// instanceof
function test1(params: Date | string) {
  if (params instanceof Date) {
    return params.getTime();
  }
  return params.toUpperCase();
}

// 類型陳述
function isFish(animal: Fish | Bird): animal is Fish {
  if ((animal as Fish).swim !== undefined) {
    return true;
  }
  return false;
}

//
function test2(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}
