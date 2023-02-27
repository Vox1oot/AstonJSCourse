const sum = (a, b) => +((+a + +b).toFixed(3));

const getNumberRadix = (number, radix) => {
  const exception = () => {
    throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами.');
  }

  const currentNumber = +number;

  if (
    currentNumber < 0 ||
    !Number.isInteger(currentNumber)||
    Number.isNaN(currentNumber) ||
    radix < 2 ||
    radix > 16
  ) { exception() }
  return currentNumber.toString(radix);
};