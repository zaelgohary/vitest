export function displayingOutput(resultText){
  const output = document.getElementById('result');
  output.textContent = resultText;

  return output.textContent
}