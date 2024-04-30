const [emptyStar, fullStar] = ["☆", "★"];

const renderNews = (news) => {
  console.clear();
  console.log("NEWS\n\n");

  let newsTemplates = news.map((item) => {
      let rating = Math.round(item.rating.toFixed(1));
      const stars = fullStar.repeat(rating).padEnd(5, emptyStar);

      let template =
        `${item.title} (${stars})\n` +
        `\t - ${item.publishedOn}` +
        ` <${item.author.name}> \n`;

      return template;
    })
    .join("\n");

  console.log(newsTemplates);
};


export default renderNews;