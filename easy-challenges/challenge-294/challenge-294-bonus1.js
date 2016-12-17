/**
 * @author Troy Nguyen
 * 12/17/16
 * reddit.com/r/dailyprogrammer easy challenge #294: Rack management 1 bonus1
 */

var input = [['pizza??', 'pizzazz'], ['piizza?', 'pizzazz'], ['a??????', 'program'], ['b??????', 'program']];

String.prototype.deleteChar = function(index) {
	return this.substring(0, index) + this.substring(index + 1, this.length + 1);
};

function scrabble(letterTiles, desiredWord) {
	var freeTileCount = 0;
	
	for(var j = 0; j < letterTiles.length; j++) {
		if(letterTiles.charAt(j) === '?') {
			freeTileCount++;
			letterTiles = letterTiles.deleteChar(j);
			
			j = -1;
		}
	}

	for(var k = 0; k < letterTiles.length; k++) {
		if(desiredWord.includes(letterTiles.charAt(k))) {
			desiredWord = desiredWord.replace(letterTiles.charAt(k), '');
		}
	}
	
	return freeTileCount >= desiredWord.length;
}

for(var i = 0; i < input.length; i++) {
	console.log(scrabble(input[i][0], input[i][1]));
}