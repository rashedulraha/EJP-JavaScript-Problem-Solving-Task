function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    capitalized.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }

  return capitalized.join(" ");
}

// console.log(capitalizeWords("hello world")); // "Hello World"
