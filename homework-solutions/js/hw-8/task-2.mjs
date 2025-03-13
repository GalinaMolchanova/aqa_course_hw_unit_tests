/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(words) {
  function vowelCount(word) { 
    let vowels = 'aeiouAEIOU'; 
    let vowelsCount = 0;
    
    for (let letter of word) { 
      if (vowels.includes(letter)) {
        vowelsCount++; 
      }
    }
    
    return vowelsCount; 
  }

  return words.sort((a, b) => vowelCount(a) - vowelCount(b));
};

console.log(sortedByVowels(words));

export { sortedByVowels };
