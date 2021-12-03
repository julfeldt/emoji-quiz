import { substring } from "stringz";

function emojify(emoji) {
  return substring(emoji, 0, 1);
}

const movies = [
  {
    emoji: [
      emojify("🗡"),
      emojify("✞"),
      emojify("🧛"),
      emojify("🧄"),
      emojify("👧"),
    ],
    cast: ['"Spike"','Sarah Michelle Gellar'],
    answer: "Buffy the Vampire Slayer",
    imdb: "buffy.jpg"
  },
  {
    emoji: [
      emojify("👨‍🚀"),
      emojify("📚"),
      emojify("🤠"),
      emojify("🦖"),
    ],
    cast: ['"Woody"','Tim Allen'],
    answer: "Toy Story",
    imdb: "toy_story.jpg"
  },
  {
    emoji: [
      emojify("👦🏿"),
      emojify("👦🏻"),
      emojify("👧"),
      emojify("👦🏼"),
      emojify("👦🏻"),
      emojify("👹"),
    ],
    cast: ['Millie Bobby Brown','Dustin Henderson'],
    answer: "Stranger Things",
    imdb: "stranger_things.jpg"
  },
  {
    emoji: [
      emojify("🔥"),
      emojify("🥕"),
      emojify("👗"),
      emojify("👩🏿‍🦱"),
      emojify("🤵🏻‍♂️"),
    ],
    cast: ['Clark Gable','Vivien Leigh'],
    answer: "Gone with the Wind",
    imdb: "gone_with_the_wind.jpg"
  },
  {
    emoji: [
      emojify("👁"),
      emojify("🏪"),
      emojify("🔪"),
      emojify("🩸"),
      emojify("🚿"),
    ],
    cast: ['Janet Leigh','"Norman Bates"'],
    answer: "Psycho",
    imdb: "psycho.jpeg"
  },
  {
    emoji: [
      emojify("💥"),
      emojify("🇺🇸"),
      emojify("⚓"),
      emojify("🛩"),
      emojify("🇯🇵"),
    ],
    cast: ['Kate Beckinsale','"Rafe McCawley"'],
    answer: "Pearl Harbor",
    imdb: "pearl_habor.jpeg"
  },
  {
    emoji: [
      emojify("💰"),
      emojify("🐔"),
      emojify("🔹"),
      emojify("🧑‍🔬"),
      emojify("🚍"),
    ],
    cast: ['"Skyler White"','Bryan Cranston'],
    answer: "Breaking Bad",
    imdb: "breaking_bad.jpeg"
  },
  {
    emoji: [
      emojify("👰🏻‍♀️"),
      emojify("🔫"),
      emojify("💰"),
      emojify("🐴"),
      emojify("🤵‍♂️")
    ],
    cast: ["Al Pacino", "Marlon Brando"],
    answer: "The Godfather",
    imdb: "the_godfather.jpeg"
  },
  {
    emoji: [
      emojify("🥊"),
      emojify("💉"),
      emojify("🕺"),
      emojify("🧳"),
    ],
    cast: ['"Pumpkin"','"Vincent Vega"'],
    answer: "Pulp Fiction",
    imdb: "pulp_fiction.jpeg"
  },
  {
    emoji: [
      emojify("🐧"),
      emojify("👊🏻"),
      emojify("💣"),
      emojify("🧼"),
    ],
    cast: ['Meat Loaf','"The Narrator"'],
    answer: "Fight Club",
    imdb: "fight_club.jpg"
  },
  {
    emoji: [
      emojify("🩴"),
      emojify("🤺"),
      emojify("👨‍👦"),
      emojify("🐅"),
      emojify("🩸"),
    ],
    cast: ['Connie Nielsen','"Maximus"'],
    answer: "Gladiator",
    imdb: "gladiator.jpeg"
  },
  {
    emoji: [
      emojify("🪞"),
      emojify("✍️"),
      emojify("💄"),
      emojify("👯"),
      emojify("🏨"),
      emojify("🪓"),
    ],
    cast: ['"Jack Torrance"','"Danny"'],
    answer: "The Shining",
    imdb: "the_shining.jpeg"
  },
  {
    emoji: [
      emojify("🔘"),
      emojify("🌴"),
      emojify("🐻‍❄️"),
      emojify("✈️"),
      emojify("1️⃣"),
      emojify("0️⃣"),
      emojify("8️⃣"),
    ],
    cast: ['Matthew Fox','"Kate Austen"'],
    answer: "Lost",
    imdb: "lost.jpeg"
  }
];

export default movies;
