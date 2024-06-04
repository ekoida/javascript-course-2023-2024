import http from "node:http";
import fs from "node:fs";

const routes = {
  "/": "index.html",
  "/style.css": "css/style.css",
  "/app.js": "js/app.js",
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
      }

      res.write(data);
      res.end();
    });
  } else if (req.url === "/api/order") {
    // extract data from request body
    let body = "";
    req.on("data", (chunk) => {
      // write data by parts into body string
      body += chunk;
    });

    req.on("error", (err) => {
      // if any error - write and stop the request
      res.write(JSON.stringify(err));
      res.end();
    });

    req.on("end", () => {
      // on end of reading request we write data into order.json
      fs.writeFile("data/order.json", body, (err) => {
        if (err) {
          console.log(err);
          res.write(JSON.stringify(err));
          res.end();
        }

        res.write(JSON.stringify({ message: "order placed!" }));
        res.end();
      });
    });
  } else {
    res.write("Not found");
    res.end();
    return;
  }
});

server.listen(8889);
