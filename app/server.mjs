import http from "node:http";
import fs from "node:fs";
import querystring from "node:querystring";
import { randomUUID } from "node:crypto";
import { sql } from "./db/connection.js";

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
    sql`
    SELECT *
     FROM
    PRODUCTS  
    `.then((data) => {
      res.setHeader("Content-Type", "applicaiton/json");
      res.write(JSON.stringify(data));
      res.end();
    });
    // HW -1 reqrite this one using sql
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

      sql`
     INSERT INTO 
      orders (product_id, order_email, address, phone, order_quantity, pin)
      VALUES(
      ${data.productId},
       ${data.orderEmail},
       ${data.address},
       ${data.phone},
       ${data.orderQuantity},
       ${data.orderPin}
       )

       returning id
      `
        .then((data) => {
          res.setHeader("Content-Type", "applicaiton/json");
          res.write(
            JSON.stringify({ message: `order with id:${data[0].id} placed!` })
          );
          res.end();
        })
        .catch((error) => {
          res.setHeader("Content-Type", "applicaiton/json");
          res.write(JSON.stringify(error));
          res.end();
        });
    });
  } else if (req.url.startsWith("/api/orderinfo")) {
    // order_id=2bb91f69&pin=asdf - queryString
    const queryString = req.url.split("?")[1];

    // {order_id: "2bb91f69", pin: 'asdf'} - params
    const { order_id, pin } = querystring.parse(queryString);

    sql`
    SELECT *
      FROM orders
    WHERE id::text LIKE ${order_id + "%"} AND pin=${pin};
    `
      .then((order) => {
        res.setHeader("Content-Type", "applicaiton/json");
        res.write(JSON.stringify(order[0]));
        res.end();
      })
      .catch((err) => {
        console.dir(err);
        res.setHeader("Content-Type", "applicaiton/json");
        res.write(JSON.stringify({ message: "order not found" }));
        res.end();
      });
  } else {
    res.write("Not found");
    res.end();
    return;
  }
});

server.listen(8889);
