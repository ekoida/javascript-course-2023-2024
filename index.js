const news = [
 {title: "News One", publishedOn: "2024-04-24",author:"Piter Pen", rating: 4.5},
 {title: "News Two", publishedOn: "2024-04-23", author:"Marry Poppins",rating: 5.0},
 {title: "News Three", publishedOn: "2024-04-23",author:"Pete Dice", rating: 3.2}
]


console.clear()
console.log("NEWS\n\n")

news.forEach((item) => {
    let rating = Math.round(item.rating.toFixed(1))
    let template;
    switch (rating) {
      case 1:
         template =
          `${item.title} (★ ☆ ☆ ☆ ☆)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
      case 2:
         template =
          `${item.title} (★ ★ ☆ ☆ ☆)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
      case 3:
         template =
          `${item.title} (★ ★ ★ ☆ ☆)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
      case 4:
         template =
          `${item.title} (★ ★ ★ ★ ☆)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
      case 5:
         template =
          `${item.title} (★ ★ ★ ★ ★)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
      default:
         template =
          `${item.title} (☆ ☆ ☆ ☆ ☆)\n` +
          `\t - ${item.publishedOn}` +
          ` <${item.author}>\n`;
        break;
    }
    console.log(template)
})