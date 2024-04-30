import { readFile, writeFile } from "node:fs/promises";

let data = await readFile("./news.json");

data = JSON.parse(data);

data.forEach((newsItem) => {
  console.log(`${newsItem.title} <${newsItem.author}>`);
});

let title = "This is a sample text";
await writeFile("./news.txt", title);

let news = [{ title: "First Title" }, { title: "Second Title" }];
await writeFile("./news-written.json", JSON.stringify(news))


// HW1: create a diagram for write and for write an json
