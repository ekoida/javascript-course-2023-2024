// I/O input - output

const getNumbers = (cb, size = 10) => {
  let numbers = [];
  setTimeout(() => {
    // HW2 set interval ()
    while (numbers.length < size) {
      numbers.push(Math.ceil(-5 + Math.random() * 10));
    }

    cb(numbers);
  }, Math.random() * 3000);

  return numbers;
};

// prpocess - async
const maxNumber = (cb, numbers) => {
  // HW1 - think another way to get max value

  let maxNumber = numbers[0];

  setTimeout(() => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }

    cb(maxNumber);
  }, Math.random() * 3000);
};

// render
const renderNumber = (number) => {
  console.log(">>>>>", number);
};

getNumbers((numbers) => {
  maxNumber(renderNumber, numbers);
});
