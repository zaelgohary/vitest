import { extractEnteredNumberValues } from './src/parser.js';
import { generateResultText } from "./src/err.js";
import { displayingOutput } from "./src/data.js"
import { calculateResult } from "./src/math.js";

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumberValues(form);
  const result = calculateResult(numberValues);

  const resultText = generateResultText(result)
  const shownData = displayingOutput(resultText)
  return shownData
}

form.addEventListener('submit', formSubmitHandler);
