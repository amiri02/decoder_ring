// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const subs = [];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const repeats = new Set(alphabet);
    if (
      alphabet === undefined ||
      alphabet.length < 26 ||
      [...repeats].length < 26
    )
      return false;

    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 26; i++) {
        subs[letters[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        subs[alphabet[i]] = letters[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " ";
        return subs[letter];
      });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
