module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let pairBrackets = {};
  for (let i = 0; i < bracketsConfig.length; i++){
    let key = bracketsConfig[i][1];
    let value = bracketsConfig[i][0];
    openBrackets.push(bracketsConfig[i][0]);
    pairBrackets[key] = value;
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
  
  if (openBrackets.includes(currentSymbol)) {
    stack.push(currentSymbol);
  } else {
    if (stack.length === 0) {
      return false;
    }
  }
    let topElement = stack[stack.length - 1];
    
    if (pairBrackets[currentSymbol] === topElement) {
      stack.pop();
    } 
    }
  
  return stack.length === 0;
}
