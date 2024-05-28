import http from "node:http";
import fs from "node:fs";

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

    // 1- react only for html page
    if (routes[req.url] === "index.html") {
      // 2 - load json
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
          price: { amount, currency },
        } = JSON.parse(dataJSON);

        data = data
          .toString()
          .replace("{title}", title)
          .replace("{subtitle}", subtitle)
          .replace("{description}", description)
          .replace("{image}", image)
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
