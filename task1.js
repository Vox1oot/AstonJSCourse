const sum = (a, b) => {
  const result = `${(+a) + (+b)}`;
  return result.length < 5 ? Number(result) : +Number(result).toFixed(3); 
};

const getNumberRadix = (number, radix) => {
  const exception = () => {
    throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами.');
  }

  const currentNumber = Number(number);
  if (currentNumber < 0 || !Number.isInteger(currentNumber)) {
    exception();
  }
  if (radix < 2 || radix > 16) {
    exception();
  }
  return `${currentNumber.toString(radix)}`;
};

