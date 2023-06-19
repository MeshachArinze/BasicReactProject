import wordBank from "./wordle-bank.txt"

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
    try {
        let wordSet;
        let todaysWord;

        await fetch(wordBank)
          .then((response) => response.text())
          .then((result) => {
            const wordArr = result.split("\n").sort(function (a, b) {
              return a - b;
            });
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
          });

        return { wordSet, todaysWord };
    } catch (error ) {
        console.log(error)
    }
}