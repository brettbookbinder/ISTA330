/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
	var result = "";
	for(var i = 0; i < shuffleIndices.length; i++){
		result += input[shuffleIndices.indexOf(i)];
	}
	return result;
};