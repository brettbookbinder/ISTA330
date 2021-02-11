/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
input = input.sort();
if (input.length % 2 == 0){
	var first = input.length / 2 + 0.5;
	var second = first + 1;
	return (first + second) / 2;
}
else{
	var leng = (input.length / 2) - 0.5;
	return input[leng];
}	
};