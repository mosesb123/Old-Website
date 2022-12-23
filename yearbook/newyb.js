const mapSPT = {
    'ק': 'q',
    'ו': 'w',
    'ר': 'r',
    'ת': 't',
    'י': 'y',
    'פ': 'p',
    'ס': 's',
    'ד': 'd',
    'ג': 'g',
    'ה': 'h',
    'כ': 'k',
    'ל': 'l',
    'ז': 'z',
    'ח': 'x',
    'צ': 'c',
    'ב': 'b',
    'נ': 'n',
    'מ': 'm',
    'ף': 'P',
    'ך': 'K',
    'ץ': 'C',
    'ן': 'N',
    'ש': '#',
    'ם': 'M',
    'ע': '(',
    'א': ')',
    'ט': '+',
    ' ': ' ',
    '.': '*',
    ',': 'D'
  };

const mapDB =  {
    'ס': 'q',
    'ק': 'w',
    'ר': 'e',
    'ע': 'r',
    'פ': 't',
    'ש': 'y',
    'ץ': 'u',
    'י': 'i',
    'ן': 'o',
    'נ': 'p',
    'ב': 'a',
    'ף': 's',
    'ה': 'd',
    'ז': 'f',
    'ח': 'g',
    'ט': 'h',
    'ת': 'j',
    'כ': 'k',
    'ם': 'l',
    'מ': ';',
    'ך': "'",
    'ד': 'z',
    'ג': 'x',
    'ז': 'c',
    'ח': 'v',
    'ט': 'b',
    'י': 'n',
    'ך': 'm',
    ' ': ' ',
    '.': '*',
    ',': 'D'
  };

var SD = prompt("1 for SPTiberian, 2 for Davka Bodel.");
var hebrew = prompt("Input Hebrew text.");

function hebrewToEnglish(mapping, hebrew) {
  let englishWord = "";

  for (var i = 0; i < hebrew.length; i++) {
    englishWord += mapping[hebrew[i]] || hebrew[i];
  }

  return englishWord;
}

if (SD == 1) {
  var english = hebrewToEnglish(mapSPT, hebrew);
} else {
  var english = hebrewToEnglish(mapDB, hebrew);
}

englishArray.push(englishWord);
