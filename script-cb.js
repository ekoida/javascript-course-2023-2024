// I/O input - output

const getNumbers = (cb, size = 10) => {
  //2.
  let numbers = [];
  setTimeout(function firstTimeOut() {
    //3.
    // HW2 set interval ()
    // while (numbers.length < size) {
    //   numbers.push(Math.ceil(-5 + Math.random() * 10));
    // }

    // HW2 - solution. Didn't found any other way to use set interval
    const intervalId = setInterval(function innerInterval() {
      if (numbers.length >= size) {
        cb(numbers); //4.
        clearInterval(intervalId);
      }
      numbers.push(Math.ceil(-5 + Math.random() * 10));
    }, Math.random() * 500);

    // cb(numbers); //4.
  }, Math.random() * 3000);

  return numbers;
};

// prpocess - async
const maxNumber = (cb, numbers) => {
  //7.
  // HW1 - think another way to get max value

  //let maxNumber = numbers[0];

  setTimeout(function secondTimeOut() {
    //8.

    //FIRST WAY TO GET MAX VALUE
    // for (let i = 0; i < numbers.length; i++) {
    //   if (numbers[i] > maxNumber) {
    //     maxNumber = numbers[i];
    //   }
    // }
    //SECOND WAY TO GET MAX VALUE
    let maxNumber = numbers.toSorted((a, b) => b - a)[0];
    //THIRD WAY TO GET MAX VALUE
    //let maxNumber = Math.max(...numbers)
    cb(maxNumber); //9.
  }, Math.random() * 3000);
};

// render
const renderNumber = (number) => {
  console.log(">>>>>", number);
};

getNumbers(function firstCallback(numbers) {
  //1.
  //5.
  maxNumber(renderNumber, numbers); //6.
});
