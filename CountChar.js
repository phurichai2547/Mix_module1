function countCharProduct(str) {
    const charCounts = {};
    for (let char of str) {
      if (charCounts[char]) {
        charCounts[char]++;
      } else {
        charCounts[char] = 1;
      }
    }
  
    let product = 1;
    for (const count of Object.values(charCounts)) {
      product *= count;
    }
    return product;
  }
  
  // Test cases
  console.log(countCharProduct("AABBCC"));  // Output: 8
  console.log(countCharProduct("ABCC"));     // Output: 6
  console.log(countCharProduct("AA"));        // Output: 4
  