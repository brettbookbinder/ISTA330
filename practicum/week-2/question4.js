/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
	var total = 0;
	var listA = A.split('');
	var listB = B.split('');
	for(i = 0; i < listA.length; i++){
		for(j = 0; j < listB.length; j++){
			if(listA[i] == listB[j]){
				total = total + 1;
			}
	}
}
return total;
};