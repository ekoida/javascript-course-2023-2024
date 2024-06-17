import { sql } from "./db/connection.js";
import { readFile } from "node:fs/promises";

const productsData = await readFile("data/product.json");

const productsJson = JSON.parse(productsData);
productsJson.forEach(async (product) => {
  await sql`
  INSERT INTO products VALUES(
  ${product.id},
  ${product.title},
  ${product.subtitle},
  ${product.description},
  ${product.image},
  ${product.tags},
  ${product.price.amount},
  ${product.price.currency}
  )
    returning *
    `.execute();
});
