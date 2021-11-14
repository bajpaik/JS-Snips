/************Shortest code to create an Array of numbers in #javascript.**********/

[...Array(5).keys()] 
//creates [0,1,2,3,4]

/*****************#javascript function that capitalizes the first character of a string.******/
function capitalize (string) {
return string.charAt(0).toUpperCase() + string.substring(1);
}
console.log(capitalize('hello'))
