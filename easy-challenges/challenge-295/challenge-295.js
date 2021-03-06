/**
 * @author Troy Nguyen
 * 12/17/16
 * reddit.com/r/dailyprogrammer easy challenge #295: Letter By Letter
 */
 
String.prototype.replaceAt = function(index, newChar) {
	return this.substring(0, index) + newChar + this.substring(index + 1, this.length + 1);
};
 
var input = [['floor', 'brake'], ['wood', 'book'], ['a fall to the floor', 'braking the door in']];

function changeWordByLetter(startWord, endWord) {
	console.log(startWord);
	
	for(var j = 0; j < startWord.length; j++) {
		if(startWord.charAt(j) === endWord.charAt(j)) {
			continue;
		}
		
		startWord = startWord.replaceAt(j, endWord.charAt(j));
		
		console.log(startWord);
	}
	
	console.log('\n');
}

for(var i = 0; i < input.length; i++) {
	changeWordByLetter(input[i][0], input[i][1]);
}