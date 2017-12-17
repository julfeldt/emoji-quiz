import { substring } from "stringz";
const movies = [
  {
    emoji: [
      substring("👦🏻", 0, 1),
      substring("👧🏻", 0, 1),
      substring("☎️", 0, 1),
      substring("🚴‍", 0, 1),
      substring("👽", 0, 1)
    ],
    cast: ["Steven Spielberg", "Drew Barrymore"],
    answer: "E.T. the Extra-Terrestrial",
    imdb: "et.jpg"
  },
  {
    emoji: [
      substring("🐀", 0, 1),
      substring("🍕", 0, 1),
      substring("👊🏼", 0, 1),
      substring("🐢", 0, 1)
    ],
    cast: ["Casey Jones", "April O'Neil"],
    answer: "Teenage Mutant Ninja Turtles",
    imdb: "tmnt.jpg"
  },
  {
    emoji: [
      substring("👩🏻", 0, 1),
      substring("🔮", 0, 1),
      substring("👨🏻", 0, 1),
      substring("⚰️", 0, 1),
      substring("🏺", 0, 1)
    ],
    cast: ["Patrick Swayze", "Demi Moore"],
    answer: "Ghost",
    imdb: "ghost.jpg"
  },
  {
    emoji: [
      substring("🇷🇺", 0, 1),
      substring("🤵🏻", 0, 1),
      substring("📡", 0, 1),
      substring("👩🏻", 0, 1),
      substring("🔫️", 0, 1),
      substring("👁️️", 0, 1)
    ],
    cast: ['"Xenia Onatopp"', '"Natalya Simonova"'],
    answer: "James Bond - GoldenEye",
    imdb: "golden_eye.jpg"
  },
  {
    emoji: [
      substring("👶🏻", 0, 1),
      substring("🍉", 0, 1),
      substring("💃🏻", 0, 1),
      substring("🕺🏻", 0, 1)
    ],
    cast: ["Jennifer Grey", "Patrick Swayze"],
    answer: "Dirty Dancing",
    imdb: "dirty_dancing.jpg"
  },
  {
    emoji: [
      substring("👧🏻", 0, 1),
      substring("💰", 0, 1),
      substring("👨🏻", 0, 1),
      substring("🕶️", 0, 1),
      substring("🔫", 0, 1),
      substring("🌱", 0, 1)
    ],
    cast: ["Jean Reno", '"Mathilda"'],
    answer: "Léon",
    imdb: "leon.jpg"
  },
  {
    emoji: [
      substring("👨🏻", 0, 1),
      substring("👩🏻", 0, 1),
      substring("🚪", 0, 1),
      substring("💎", 0, 1),
      substring("🚢", 0, 1),
      substring("🆘", 0, 1)
    ],
    cast: ["Leonardo DiCaprio", "Kate Winslet"],
    answer: "Titanic",
    imdb: "titanic.jpg"
  },
  {
    emoji: [
      substring("👴🏻", 0, 1),
      substring("👦🏻", 0, 1),
      substring("🕙", 0, 1),
      substring("⬅️", 0, 1),
      substring("🚗", 0, 1),
      substring("💨️", 0, 1)
    ],
    cast: ["Christopher Lloyd", "Michael J. Fox"],
    answer: "Back to the Future",
    imdb: "back_to_the_future.jpg"
  },
  {
    emoji: [
      substring("🤓", 0, 1),
      substring("😊", 0, 1),
      substring("😴", 0, 1),
      substring("👩🏻", 0, 1),
      substring("😒", 0, 1),
      substring("😛", 0, 1),
      substring("😳", 0, 1),
      substring("🤧", 0, 1),
      substring("🍎", 0, 1)
    ],
    cast: ['"Bashful"', '"Dopey"'],
    answer: "Snow White and the Seven Dwarfs",
    imdb: "snow_white.jpg"
  },
  {
    emoji: [
      substring("👴🏻", 0, 1),
      substring("🐶", 0, 1),
      substring("👦🏻", 0, 1),
      substring("🗺", 0, 1),
      substring("🏠", 0, 1),
      substring("🎈", 0, 1)
    ],
    cast: ['"Carl Fredricksen"', '"Russell"'],
    answer: "Up",
    imdb: "up.jpg"
  },
  {
    emoji: [
      substring("🤓", 0, 1),
      substring("📞", 0, 1),
      substring("🥄", 0, 1),
      substring("💊", 0, 1),
      substring("😎", 0, 1)
    ],
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    answer: "The Matrix",
    imdb: "matrix.jpg"
  },
  {
    emoji: [
      substring("👱🏼", 0, 1),
      substring("👴", 0, 1),
      substring("🏗", 0, 1),
      substring("🐍", 0, 1),
      substring("🥋", 0, 1)
    ],
    cast: ["Ralph Macchion", "Elisabeth Shue"],
    answer: "Karate Kid",
    imdb: "karate_kid.jpg"
  },
  {
    emoji: [
      substring("👩🏻", 0, 1),
      substring("🚛", 0, 1),
      substring("🔫", 0, 1),
      substring("👦🏻", 0, 1),
      substring("👮", 0, 1),
      substring("🤖", 0, 1)
    ],
    cast: ["Arnold Schwarzenegger", "Edward Furlong"],
    answer: "Terminator 2: Judgment Day",
    imdb: "terminator2.jpg"
  },
  {
    emoji: [
      substring("👨🏻", 0, 1),
      substring("⛸️", 0, 1),
      substring("📦", 0, 1),
      substring("🌴", 0, 1),
      substring("🏐", 0, 1)
    ],
    cast: ["Tom Hanks", '"Wilson"'],
    answer: "Cast Away",
    imdb: "cast_away.jpg"
  },
  {
    emoji: [
      substring("👨🏻", 0, 1),
      substring("💣", 0, 1),
      substring("💨", 0, 1),
      substring("👩🏻", 0, 1),
      substring("🚌", 0, 1)
    ],
    cast: ["Keanu Reeves", "Sandra Bullock"],
    answer: "Speed",
    imdb: "speed.jpg"
  }
];

export default movies;
