new Set([1,1,2,2,3,4])

{1, 2, 3, 4}

[...new Set("referee")].join("")

'ref'

Map(2) {
    [1, 2, 3] => true,
    [1, 2, 3] => false
  }
//There are 2 entries, 2 different arrays as keys.  

function hasDuplicate(arr) {
    const uniqueElements = new Set(arr);
    return uniqueElements.size !== arr.length;
}

function vowelCount(str) {
    const vowels = 'aeiou';
    const vowelMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        if (vowelMap.has(char)) {
          vowelMap.set(char, vowelMap.get(char) + 1);
        } else {
          vowelMap.set(char, 1);
        }
      }
    }
  
    return vowelMap;
  }
  