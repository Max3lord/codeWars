// Basic Mathematical Operations

function basicOp(operation, value1, value2) {
	// Code
	  if (operation == "+") {
		 return value1 + value2;
	  } else if (operation == '-') {
		 return value1 - value2;
	  } else if (operation == '*') {
		 return value1 * value2;
	  } else if (operation == '/') {
		 return value1 / value2;
	  } else {
		 return "Sorry, operator not a found";
	  }
 }