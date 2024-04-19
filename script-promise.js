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

const pRenderNumber = () => {
  return new Promise((resolve, reject) => {
    let result = ``;

    setTimeout(() => {
      result = `{number: ${number}}`;

      resolve(result);
    });
  });
};

//////////////////////

let p_numbers = pGetNumbers(5);

let p_max_number = p_numbers.then((numbers) => {
  return pMaxNumber(numbers);
});

p_max_number.then((result) => console.log(result));

////////////

pGetNumbers(5)
  .then((numbers) => {
    return pMaxNumber(numbers);
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

function execute() {
  pGetNumbers(5)
    .then((numbers) => {
      return pMaxNumber(numbers);
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
