// I/O input - output
const pGetNumbers = (size = 10) => {
  return new Promise((resolve, reject) => {
    let numbers = [];

    setTimeout(() => {
      while (numbers.length < size) {
        numbers.push(Math.ceil(-5 + Math.random() * 10));
      }

      resolve(numbers);
    }, Math.random() * 3000);
  });
};

const pMaxNumber = (numbers) => {
  return new Promise((resolve, reject) => {
    let maxNumber = numbers[0];

    setTimeout(() => {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
          maxNumber = numbers[i];
        }
      }

      resolve(maxNumber);
    }, Math.random() * 3000);
  });
};

// render

const pRenderNumber = (number) => {
  return new Promise((resolve, reject) => {
    let result = ``;

    setTimeout(() => {
      result = `{number: ${number}}`;

      resolve(result);
    }, Math.random() * 1000);
  });
};

// async functions
async function execute() {
  const numbers = await pGetNumbers(5);
  const max = await pMaxNumber(numbers);
  const result = await pRenderNumber(max);

  console.log(result);
}
