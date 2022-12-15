// Fake Binary

function fakeBin(x){
	return x.split('').map(y => y < 5 ? 0 : 1).join('');
 }