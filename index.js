const news = [
 {title: "News One", publishedOn: "2024-04-24",author:"Piter Pen", rating: 4.5},
 {title: "News Two", publishedOn: "2024-04-23", author:"Marry Poppins",rating: 5.0},
 {title: "News Three", publishedOn: "2024-04-23",author:"Pete Dice", rating: 3.2}
]


console.clear()
console.log("NEWS\n\n")

// const emptyStar = "☆";
// const fullStar = "★";
const [emptyStar, fullStar] = ["☆", "★"];
const ratingMap = [
  `☆ ☆ ☆ ☆ ☆`,
  `★ ☆ ☆ ☆ ☆`,
  `★ ★ ☆ ☆ ☆`,
  `★ ★ ★ ☆ ☆`,
  `★ ★ ★ ★ ☆`,
  `★ ★ ★ ★ ★`,
];

let newsTemplates = news.map((item) => {
    let rating = Math.round(item.rating.toFixed(1));
    const stars = fullStar.repeat(rating).padEnd( 5, emptyStar)
  
    let template =
      `${item.title} (${stars})\n` +
      `\t - ${item.publishedOn}` +
      ` <${item.author}> \n`;

    return template
}).join("\n")


console.log(newsTemplates)
