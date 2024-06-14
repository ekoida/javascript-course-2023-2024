import http from "node:http";
import fs from "node:fs";
import querystring from "node:querystring";
import { randomUUID } from "node:crypto";

const routes = {
  "/": "index.html",
  "/style.css": "css/style.css",
  "/app.js": "js/app.js",
  "/favicon.ico": "favicon.ico",
  "/product1.jpg": "img/product1.jpg",
  "/product2.jpg": "img/product2.jpg",
  "/product3.jpg": "img/product3.jpg",
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

    req.on("error", (err) => {
      // if any error - write and stop the request
      res.write(JSON.stringify(err));
      res.end();
    });

    req.on("data", (chunk) => {
      // write data by parts into body string
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      const uuid = randomUUID();
      data.id = uuid;

      fs.writeFile(`data/orders/${uuid}.json`, JSON.stringify(data), (err) => {
        if (err) {
          console.log(err);
          res.write(JSON.stringify(err));
          res.end();
        }

        res.write(JSON.stringify({ message: "order placed!" }));
        res.end();
      });
    });
  } else if (req.url.startsWith("/api/orderinfo")) {
    let queryString = req.url.split("?")[1];
    let params = querystring.parse(queryString);

    fs.readFile(`data/orders/${params.order_id}.json`, (err, dataJSON) => {
      if (err) {
        res.end("Order not found");
        return;
      }
      let data = JSON.parse(dataJSON);
      if (data.pin === params.pin) {
        res.write(JSON.stringify(data));
      } else {
        res.write("not authorised");
      }
      res.end();
    });
  } else {
    res.write("Not found");
    res.end();
    return;
  }
});

server.listen(8889);
