import http from "node:http";
import fs from "node:fs";

// HW:1 modify the html file
// and the server logic
// so you load a favicon / logo into the page
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      res.write(data);

      res.end();
    });
  } else if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      res.write(data);

      res.end();
    });
  } else {
    res.write("Not found");
    res.end();
  }

  console.log("a requset inserted");
});

server.listen(8888);
