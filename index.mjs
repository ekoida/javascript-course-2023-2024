import getAllNews from "./storage.mjs"
import renderNews from "./ui.mjs"


let news = await getAllNews()

renderNews(news)