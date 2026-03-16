const rawAnswerByQuestionNumber = {
  1: ["B"],
  2: ["C"],
  3: ["B"],
  4: ["B"],
  5: ["B"],
  6: ["B"],
  7: ["C"],
  8: ["C"],
  9: ["C"],
  10: ["B"],
  11: ["B"],
  12: ["B"],
  13: ["B"],
  14: ["C"],
  15: ["C"],
  16: ["A", "C", "D"],
  17: ["C"],
  18: ["B"],
  19: ["C"],
  20: ["B"],
  21: ["B"],
  22: ["B"],
  23: ["C"],
  24: ["A", "C", "D"],
  25: ["B"],
  26: ["B"],
  27: ["B"],
  28: ["C"],
  29: ["B"],
  30: ["C"],
  31: ["C"],
  32: ["C"],
  33: ["B"],
  34: ["D"],
  35: ["C"],
  36: ["B"],
  37: ["C"],
  38: ["C"],
  39: ["B"],
  40: ["C"],
  41: ["C"],
  42: ["B", "C", "D"],
  43: ["C"],
  44: ["B"],
  45: ["B"],
  46: ["C"],
  47: ["B"],
  48: ["B"],
  49: ["C"],
  50: ["C"],
  51: ["C"],
  52: ["C"],
  53: ["C"],
  54: ["C"],
  55: ["C"],
  56: ["D"],
  57: ["C"],
  58: ["C"],
  59: ["A"],
  60: ["B"],
  61: ["B"],
  62: ["B"],
  63: ["C"],
  64: ["C"],
  65: ["C"],
  66: ["A", "C", "D"],
  67: ["B"],
  68: ["B"],
  69: ["B"],
  70: ["B", "D"],
  71: ["B", "D", "E"],
  72: ["C"],
  73: ["B"],
  74: ["C"],
  75: ["C"],
  76: ["B"],
  77: ["B", "D"],
  78: ["C"],
  79: ["C"],
  80: ["C"],
  81: ["A"],
  82: ["C"],
  83: ["A", "C", "D"],
  84: ["A", "D"],
  85: ["C"],
  86: ["A"],
  87: ["C"],
  88: ["B"],
  89: ["D", "E"],
  90: ["C"],
  91: ["A", "D"],
  92: ["B"],
  93: ["A"],
  94: ["C"],
  95: ["B", "D"],
  96: ["C"],
  97: ["C"],
  98: ["A", "C"],
  99: ["C"],
  100: ["A"],
  101: ["B", "D"],
  102: ["A", "F"],
  103: ["B"],
  104: ["B", "C"],
  105: ["B"],
  106: ["B"],
  107: ["B"],
  108: ["A"],
  109: ["A"],
  110: ["B"],
  111: ["A"],
  112: ["B"],
  113: ["A", "B", "D"],
  114: ["B"],
  115: ["A", "B", "E"],
  116: ["D", "E"],
  117: ["A", "D"],
  118: ["A"],
  119: ["B", "C"],
  120: ["D"],
  121: ["B"],
  122: ["D"],
  123: ["B"],
  124: ["B"],
  125: ["A", "F", "G"],
  126: ["C"],
  127: ["A"],
  128: ["D"],
  129: ["D", "E", "F"],
  130: ["C", "D"],
  131: ["B"],
  132: ["B", "C"],
  133: ["A"],
  134: ["A", "C"],
  135: ["B", "C", "E"],
  136: ["D"],
  137: ["A"],
  138: ["A"],
  139: ["D"],
  140: ["D"],
  141: ["B"],
  142: ["C"],
  143: ["B", "E"],
  144: ["B", "D", "E"]
};

const ambiguousQuestionNumbers = new Set([
  91,
  129,
  141,
  143,
  144
]);

function lettersToIndexes(letters) {
  return letters.map((letter) => letter.charCodeAt(0) - 65);
}

function entryNumberToQuestionNumber(entryNumber) {
  if (entryNumber <= 6) return entryNumber;
  if (entryNumber === 7 || entryNumber === 8) return 7;
  return entryNumber - 1;
}

function buildEntryKey(includeAmbiguous) {
  const entries = {};
  for (let entryNumber = 1; entryNumber <= 145; entryNumber += 1) {
    const questionNumber = entryNumberToQuestionNumber(entryNumber);
    if (!includeAmbiguous && ambiguousQuestionNumbers.has(questionNumber)) {
      continue;
    }
    entries[`q-${entryNumber}`] = lettersToIndexes(rawAnswerByQuestionNumber[questionNumber]);
  }
  return entries;
}

export const answerKey = buildEntryKey(true);
export const strictAnswerKey = buildEntryKey(false);

export const ambiguousQuestions = [
  {
    questionNumber: 91,
    reason: "The second selected choice is weakly worded and reads more like standardization intent than a direct documented behavior."
  },
  {
    questionNumber: 129,
    reason: "'Codespaces lifecycle' is broad in GitHub Docs, and the provided answer options mix lifecycle concepts with implementation actions."
  },
  {
    questionNumber: 141,
    reason: "The 'best' tool for quickly modifying a batch of files is subjective between github.dev and local tooling."
  },
  {
    questionNumber: 143,
    reason: "Copilot plan comparisons have changed over time, so older training material does not cleanly map to current plan docs."
  },
  {
    questionNumber: 144,
    reason: "Current GitHub docs support more than three listed 2FA-related methods depending on how the question interprets GitHub Mobile and SMS."
  }
];

export const strictScoredQuestionCount = Object.keys(strictAnswerKey).length;
