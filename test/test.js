let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase",function(){
	describe("#palindrome",function(){
		it("should return false for a new palindrome",function(){
			let nonpalindrome = new Phrase("apple");
			assert(!nonpalindrome.palindrome());
		});

		it("should return true for a plain palindrome" ,function(){
			let plainPalindrome = new Phrase("racecar");
			assert(plainPalindrome.palindrome());
		});

		it("should return true for a mixed case palindrome",function(){
			let mixedPalindrome = new Phrase("Racecar");
			assert(mixedPalindrome.palindrome());
		});
		it("should return true for a palindrome with punctuation",function(){
			let puncPalindrome = new Phrase("Madam, I'm Adam.");
			assert(puncPalindrome.palindrome());
		});
	});

	describe("#letters",function(){
		it("should return only the letters", function(){
			let puncPalindrome = new Phrase("Madam, I'm Adam.");
			// assert(puncPalindrome.letters()==="MadamImAdam");
			assert.strictEqual(puncPalindrome.letters(),"MadamImAdam");
		});
	});
});
