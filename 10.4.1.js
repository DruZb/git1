var str = "Hello";
var strRev = "";
for (i = str.length-1; i >= 0; i--) {
  strRev += str[i];
}

// Задание выполнено верно, но есть более простой способ:

const reverseString = str.split("").reverse().join("");