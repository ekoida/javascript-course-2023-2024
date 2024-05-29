import http from "node:http";
import fs from "node:fs";

// HW2 - imagine that "tags": ["JS", "learning", "education", "2018", "programming", "IT"]
// is added to your JSON file data.
// - refactor the html template
// - refator the server script using a loop so teh tags would be rendered as an unordered list
const routes = {
  "/": "index.html",
  "/style.css": "css/style.css",
  "/favicon.ico": "favicon.ico",
  "/product.jpg": "img/product.jpg",
};

const server = http.createServer((req, res) => {
  if (!routes[req.url]) {
    res.write("Not found");
    res.end();

    return;
  }

  fs.readFile(routes[req.url], (err, data) => {
    if (err) {
      console.log(err);
      res.write(err.message);
      res.end();
      return;
    }

    if (routes[req.url] === "index.html") {
      fs.readFile("data/product.json", (err, dataJSON) => {
        if (err) {
          console.log(err);
          res.write(err.message);
          res.end();
          return;
        }

        const {
          title,
          subtitle,
          description,
          image,
          tags,
          price: { amount, currency },
        } = JSON.parse(dataJSON);

        const tagsString = tags
          .map((tag) => {
            return `<li>${tag}</li>`;
          })
          .join("");

        data = data
          .toString()
          .replace("{title}", title)
          .replace("{subtitle}", subtitle)
          .replace("{description}", description)
          .replace("{image}", image)
          .replace("{tags}",tagsString)
          .replace("{priceAmount}", amount)
          .replace("{priceCurrency}", currency);

        res.write(data);

        res.end();
      });
    } else {
      res.write(data);
      res.end();
    }
  });

  console.log("a requset inserted");
});

server.listen(8889);
