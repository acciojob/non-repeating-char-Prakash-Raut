function firstNonRepeatedChar(str) {
	 // Write your code here
  const char_map = new Map();

  for (let ch of str) {
    if (char_map.has(ch)) {
      char_map.set(ch, char_map.get(ch) + 1);
    } else {  
      char_map.set(ch, 1);
    }
  }

  for (let ch of str) {
    if (char_map.get(ch) === 1) {
      return ch;
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
