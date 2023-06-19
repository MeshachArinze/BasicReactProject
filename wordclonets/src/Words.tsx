import wordBank from "./wordle-bank.txt"

export const boardDefault: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet: () => Promise<
  | {
      wordSet: undefined;
      todaysWord: undefined;
    }
  | undefined
> = async () => {
  try {
    let wordSet;
    let todaysWord;

    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr: string[] = result.split("\n")
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set<string>(wordArr);
      });

    return { wordSet, todaysWord };
  } catch (error) {
    console.log(error);
  }
};