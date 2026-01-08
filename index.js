// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// // Example
// console.log(reverseString("hello"));

// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiou";

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("Rashedul"));

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// // Example
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// // Example
// console.log(sumArray([1, 2, 3, 4])); // 10

// function findEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }

// // Example
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
// [2, 4, 6];

// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let capitalized = [];

//   for (let i = 0; i < words.length; i++) {
//     capitalized.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
//   }

//   return capitalized.join(" ");
// }

// console.log(capitalizeWords("hello world"));

// function factorial(n) {
//   let result = 1;

//   for (let i = 2; i <= n; i++) {
//     result *= i; // result = result * i
//   }

//   return result;
// }

// console.log(factorial(5)); // 120

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// Run the function
pingPong();
