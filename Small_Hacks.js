/************Shortest code to create an Array of numbers in #javascript.**********/

[...Array(5).keys()] 
//creates [0,1,2,3,4]

/*****************#javascript function that capitalizes the first character of a string.******/
function capitalize (string) {
return string.charAt(0).toUpperCase() + string.substring(1);
}
console.log(capitalize('hello'))


/****************Create emoji characters from a numeric value in #javascript.****************/

const smile = String.fromCodePoint(0x1F600);
let str = `Smile ${smile} you are on TV`

console.log(str)

/******************Generate Random Integer*****************************************/
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*****************Generate GUID***********************************************/
function guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	}
/******************TRIM SPACES IN BETWEEN****************************/
var a = "User     Sentiment";
console.log(a.replace(/ /g, ""))
