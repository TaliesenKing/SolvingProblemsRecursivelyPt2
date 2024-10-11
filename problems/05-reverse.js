/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
//if the strings empty lets rule out edge cases
if (str.length < 1) {
  //that will check if the string is empty or has one character
  return str; //if it does then just return the string
}
//next we want to return by calling our function
//then inside the function use .slice(1) and concatenate that with the first character of the new string
return reverse(str.slice(1)) + str[0];

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
