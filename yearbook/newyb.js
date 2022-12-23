const SPTmap = {
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
  ו: "e",
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
  א: "`",
  " ": " ",
};

function H2E(hebrewWord, map) {
  var englishArray = hebrewWord.split("");
  englishArray = englishArray.map(function (char) {
    return map[char] || char;
  });
  var englishWord = englishArray.reverse().join("");
  return englishWord;
}

function DavkaB(heb) {
  return H2E(heb, DBmap);
}

function SP(heb) {
  return H2E(heb, SPTmap);
}
