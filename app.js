import { gettingData } from './src/parser.js';
import { validatingData } from './src/util/validation.js';
import { displayingErr } from "./src/err.js";
import { displayingOutput } from "./src/data.js"

const form = document.querySelector('form');
const output = document.getElementById('result');




function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = gettingData(form);
  let result = validatingData(numberInputs);
  const resultText = displayingErr(result)
  displayingOutput(output, resultText)
}

form.addEventListener('submit', formSubmitHandler);
