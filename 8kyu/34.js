// Find the Remainder

function remainder(n, m){
	// Divide the larger argument by the smaller argument and return the remainder
	if (n > m && m === 0) {
	  return NaN;
	} else if (m > n && n === 0) {
	  return NaN;
	} else {
	  return (n > m) ? n % m : m % n;
	}
 }