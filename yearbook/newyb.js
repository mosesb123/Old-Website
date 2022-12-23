var SD = prompt("1 for SPTiberian, 2 for Davka Bodel.");
var hebrew = prompt("Input Hebrew text.");
var english;
var map;
const mapSPT = {
  ק: "q",
  ו: "w",
  ר: "r",
  ת: "t",
  י: "y",
  פ: "p",
  ס: "s",
  ד: "d",
  ג: "g",
  ה: "h",
  כ: "k",
  ל: "l",
  ז: "z",
  ח: "x",
  צ: "c",
  ב: "b",
  נ: "n",
  מ: "m",
  ף: "P",
  ך: "K",
  ץ: "C",
  ן: "N",
  ש: "#",
  ם: "M",
  ע: "(",
  א: ")",
  ט: "+",
  " ": " ",
  ".": "*",
  ",": "D",
};

const DBmap = {
  ס: "q",
  ק: "w",
  ר: "e",
  ע: "r",
  פ: "t",
  ש: "y",
  ץ: "u",
  י: "i",
  ן: "o",
  נ: "p",
  ב: "a",
  ף: "s",
  ה: "d",
  ז: "f",
  ח: "g",
  ט: "h",
  ך: "j",
  כ: "k",
  ל: "l",
  ת: "z",
  ר: "x",
  ד: "c",
  צ: "v",
  ג: "b",
  מ: "n",
  ם: "m",
  " ": " ",
  ".": "*",
  ",": "\\",
};

(SD===1) ? map = mapSPT: map = DBmap;

for (var i = 0; i < hebrew.length; i++) {
    english += map[hebrew[i]] || hebrew[i];
}
english.reverse();
