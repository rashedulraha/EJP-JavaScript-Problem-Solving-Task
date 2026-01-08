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

function findEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
[2, 4, 6];
