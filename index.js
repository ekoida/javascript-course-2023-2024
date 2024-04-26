const news = [
 {title: "News One", publishedOn: "2024-04-24",author:"Piter Pen", rating: 4.5},
 {title: "News Two", publishedOn: "2024-04-23", author:"Marry Poppins",rating: 5.0},
 {title: "News Three", publishedOn: "2024-04-23",author:"Pete Dice", rating: 3.2}
]


const ratingMap = [`☆ ☆ ☆ ☆ ☆`, `★ ☆ ☆ ☆ ☆`, `★ ★ ★ ☆ ☆`, `★ ★ ★ ★ ☆`, `★ ★ ★ ★ ★`];

console.clear()
console.log("NEWS\n\n")

// for (let i = 0; i < news.length; i++) {

//     // HW1 - format rating ---->5.0
//     let template = ` ${news[i].title} (${news[i].rating})\n`+
//     `\t - ${news[i].publishedOn} \n`+
//     `<${news[i].author}> \n`

//     console.log(template)
// }
news.forEach((item) => {
    let rating = Math.round(item.rating.toFixed(1))
    let template = `${item.title} (${ratingMap[rating - 1]})\n`+
    `\t - ${item.publishedOn}` +
    `<${item.author}>\n`
    console.log(template)
})