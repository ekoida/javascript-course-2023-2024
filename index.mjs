/// user enter 3 rating values
// the script calculates the avg
// outputs the avg

import readline from "node:readline";
import { writeFile, readFile } from "node:fs/promises";

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

io.question("enter 3 rating values separated by space: ", (answer) => {
  // HW0*: review .forEach .filter() split() .map()
  let ratings = answer.split(" ").map((value) => parseFloat(value));

  console.log(ratings);

  // HW2: calculate sum using standard for()
  // let sumRatings = 0;
  //for (let i = 0; i < ratings.length; i++) {
  //sumRatings += ratings[i];
  //}
  const initialValue = 0;
  const sumRatings = ratings.reduce(
    (accumulator, rating) => accumulator + rating,
    initialValue
  );

  // HW3: calculate sum using Array.reduce()

  // HW4: make the calkulator flexible(accept form 2 ... 10 ratings)

  // HW5*: in a separate branch create app, that load the rating from the input
  // calculates the average and saves it in a json file back
  let avgRating = (sumRatings / ratings.length).toFixed(1);

  readFile("./data/news.json").then((content) => {
    const news = JSON.parse(content);
    news[0].rating = avgRating;

    writeFile("./data/news.json", JSON.stringify(news, null, 2));
  });
  // HW6*: in a separate branch create app, that load the rating from the json file
  // calculates the average and outputs it into console

  // HW1: format the output with only 1 digit precision 4.6 \ 4.7
  console.log(`the average reating is : ${avgRating}`);
  io.close();
});
