const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let space = "*".repeat(10);
  let morseArr = [];
  expr.includes(space) ? (expr = expr.split(space)) : (expr = expr.split(" "));
  for (let substr = 0; substr < expr.length; substr++) {
    let str = expr[substr];
    const pat = new RegExp(".{1," + 10 + "}", "ig");
    let strArr = str
      .match(pat)
      .map((item) => item.padEnd(10 - item.length, "0"));

    for (let i = 0; i < strArr.length; i++) {
      while (strArr[i].startsWith("0")) {
        strArr[i] = strArr[i].slice(1);
      }
      let chunk = strArr[i];
      let r = "";
      let chunkResult = [];
      for (s of chunk) {
        r += s;
        if (r.length === 2) {
          r === "10" ? chunkResult.push(".") : chunkResult.push("-");
          r = "";
        }
      }
      morseArr.push(chunkResult.join(""));
      chunkResult.length = 0;
    }

    morseArr.push(" ");
  }
  let result = morseArr.map((res) => (res !== " " ? MORSE_TABLE[res] : " "));
  console.log(result);

  return result.join("").trimEnd();
}

module.exports = {
  decode,
};

