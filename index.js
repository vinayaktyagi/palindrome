module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  //Returns only the letters as processedContent
  // this.letters = function letters(){
  //   let theLetters = [];
  //   for (let i = 0; i < this.content.length; i++) {
  //     if (this.content.charAt(i).match(/[a-zA-Z]/)) {
  //       theLetters.push(this.content.charAt(i));
  //     }
  //   }
  //   return theLetters.join("");
  //   const regexLetter = /[a-z]/i;
  //   Array.from(this.content).forEach(function(character){
  //     if(character.match(regexLetter)){
  //       theLetters.push(character);
  //     }
  //
  //   });
//
  //   return theLetters.join("");
  // }

  this.letters = function lettersFunctional(){
    return Array.from(this.content).filter(ch => ch.match(/[a-z]/i)).join("");
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
