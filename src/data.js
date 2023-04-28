export function displayingOutput(output, resultText){
  if(output.textContent){
    output.textContent = resultText;
    return output.textContent
  }else{
    return "Not a valid output!"
  }
}