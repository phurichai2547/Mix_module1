function findVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = {};
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i].toLowerCase();
  
      if (vowels.includes(char)) {
        if (!result[char]) {
          result[char] = [];
        }
        result[char].push(i.toString());
      }
    }
  
    return result;
  }
  
  // Test the function
  console.log(findVowels("Heleelaeiouo"));
  