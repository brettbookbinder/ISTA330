/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
	var result = 0;
	var list = input.split('');
	for(i = 0; i < list.length; i++){
		if(list[i] == 'a' && list[i+1] == 'b'){
          result += 1;
      }
      	if(list[i] == 'a' && list[i+1] == 'a' && list[i+2] == 'b' && list[i+3] == 'a'){
          result += 1;
      }
    }
    return result;
};