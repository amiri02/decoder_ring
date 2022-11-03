// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scopen
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
    return false;
  }
  let result = "";
  if (encode === false) {
    shift = shift * -1;
  }
  
  for (let i = 0; i < input.length; i++) {
    const letter = input[i].toLowerCase();
    if (letters.includes(letter)) {
      const letteri = letters.indexOf(letter);
      let letteri2 = letteri + shift;
      
      if (letteri2 > 25) {
        letteri2 += -26;
      }
      else if (letteri2 < 0 && letteri2 > -25) {
        letteri2 += 26;
      }
      const letter2 = letters[letteri2];
      result += letter2;
    } else {
      result += letter;
    }
  }
  return result;
}

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
