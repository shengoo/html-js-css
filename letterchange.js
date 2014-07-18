function LetterChanges(str) { 

  
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
  	newStr += GetNewLetter(str[i]);
  };
  return newStr; 
         
}

function GetNewLetter (letter) {
	if(letter.charCodeAt(0)<97 || letter.charCodeAt(0)>122)
		return letter;
	var code = letter.charCodeAt(0) + 1;
	var newL = String.fromCharCode(code);
	if(newL === "a" || newL === "e" || newL === "i" || newL === "o" || newL === "u")
		newL = newL.toUpperCase();
	//console.log(newL)
	return newL;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(LetterChanges("beautiful^")); 
