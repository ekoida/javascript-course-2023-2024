// HW6*: in a separate branch create app, that load the rating from the json file
// calculates the average and outputs it into console

import { readFile } from "node:fs/promises";

readFile("./data/news-2.json").then((content) => {
  const news = JSON.parse(content);
  const newsRated = news.reduce((accumulator, item) => {
    const sumRating = item.ratings.reduce((accumulator, value) => {
      accumulator += value;

      return accumulator;
    }, 0);
  
    accumulator.push({
      title: item.title,
      avgRating: sumRating / item.ratings.length,
    });
    return accumulator;
  }, []);
  console.log(newsRated);
});
