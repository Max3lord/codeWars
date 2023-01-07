// String ends with?

function solution(str, ending){
	// TODO: complete
	if(ending.length == 0) return true;
	return str.substr(-(ending.length)) == ending
 }