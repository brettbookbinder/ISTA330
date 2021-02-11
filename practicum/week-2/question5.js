/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
	var result = 0;
	var rTotal = n;
	while(rTotal != 0){
		if(rTotal % 4 == 0){
			rTotal = rTotal / 4;
		}
		else if(rTotal % 3 == 0){
			rTotal = rTotal / 3;
		}
		else{
			rTotal = rTotal - 1;
		}
		result = result + 1;
	}
	return result;
};

