const double = (arr) => {
  return arr.map((val) => {
    return val * 2;
  });
};

console.log(double([1, 2, 3, 4]));

const squareAndFindEvens = (numbers) => {
  const squares = numbers.map((num) => {
    return num ** 2;
  });
  const evens = squares.filter((square) => {
    return square % 2 === 0;
  });
  return evens;
};

console.log(squareAndFindEvens([1, 2, 3, 4]));
