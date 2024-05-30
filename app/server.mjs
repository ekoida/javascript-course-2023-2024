import http from "node:http";
import fs from "node:fs";

const routes = {
  "/": "index.html",
  "/style.css": "css/style.css",
  "/favicon.ico": "favicon.ico",
  "/product.jpg": "img/product.jpg",
};

const server = http.createServer((req, res) => {
  if (routes[req.url]) {
    fs.readFile(routes[req.url], (err, data) => {
      if (err) {
        console.log(err);
        res.write("Error is happend");
        res.end();
        return;
      }

      res.write(data);
      res.end();
    });
  } else if (req.url === "/api/product") {
    fs.readFile("data/product.json", (err, data) => {
      if (err) {
        console.log(err);
        res.write("Can't read the json file");
        res.end();
        return;
      }

      res.write(data);
      res.end();
    });
  } else {
    res.write("Not found");
    res.end();
    return;
  }
});

server.listen(8889);
