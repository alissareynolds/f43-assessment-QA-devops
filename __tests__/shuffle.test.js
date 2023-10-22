const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test('return an array of same length', () => {
    let array = ['a', 'b', 'c'];
    let shuffledArray = shuffle(array);
    expect(shuffledArray.length).toEqual(array.length);
  });

  test('return an array thats shuffled', () => {
    let array = ['a', 'b', 'c'];
    let shuffledArray = shuffle(array);
    expect(shuffledArray[0] === array[0] && shuffledArray[1] === array[1] && shuffledArray[2] === array[2]).toEqual(false);
  });

  test('return an array of the same elements', () => {
    let array = ['a', 'b', 'c'];
    let shuffledArray = shuffle(array);
    expect(shuffledArray.sort()).toStrictEqual(array.sort())
  })
});
