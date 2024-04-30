import News from "./News.mjs";
import User from "./User.mjs";

const news = [
  new News(
    "News One",
    "2024-04-24",
    new User("Piter Pen", "p.p@gmail.com", 123123),
    4.5
  ),
  new News(
    "News Two",
    "2024-04-23",
    new User("Marry Poppins", "m.p@gmail.com", 12313),
    5.0
  ),
  new News(
    "News Three",
    "2024-04-23",
    new User("Pete Dice", "p.d@gmail.com", 123123),
    3.2
  ),
];

export default news;
