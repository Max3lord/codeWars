
// Training JS #4: Basic data types--Array

function getLength(arr){
	//return length of arr
	return arr.length;
 }
 function getFirst(arr){
	//return the first element of arr
	return arr[0]
 }
 function getLast(arr){
	//return the last element of arr
	return arr[arr.length-1]
 }
 function pushElement(arr){
	var el= 4;
	//push el to arr
	var elPush = arr.push(el);
	return arr;
 }
 function popElement(arr){
	//pop an element from arr
	var elPop = arr.pop(4);
	return arr;
 }