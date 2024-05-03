import { readFile } from "node:fs/promises";
import News from "./News.mjs";
import User from "./User.mjs";

const getAllNews = async () => {
  // read file content
  let news = await readFile("./data/news.json");

  // decode as simple array + objects
  news = JSON.parse(news);

  // map the data to News + User class objects
  news = news.map((item) => {
    return new News(
      item.title,
      item.publishedOn,
      item.rating,
      new User(item.author.name, item.author.email, item.author.password)
    );
  });

  return news
};


export default getAllNews