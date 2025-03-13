/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

let word = 'abba'

function isPalindrom(word) {
  if (typeof word !== 'string') return false; 
  const resulWord = word.toLowerCase();
  const reversedWord = resulWord.split('').reverse().join('');
return resulWord === reversedWord;
};
console.log(isPalindrom(word));
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/


let sentence = 'one two six';

function findLongestWords(sentence) {
  if (typeof sentence !== "string") return [];
  if (sentence.trim().length === 0) return [];

  let words = sentence.trim().split(/\s+/);

  return words.reduce((longestWords, word) => {
    if (longestWords.length === 0 || word.length > longestWords[0].length) {
      return [word]; 
    } else if (word.length === longestWords[0].length) {
      return [...longestWords, word]; 
    }
    return longestWords;
  }, []); 
};

console.log(findLongestWords(sentence)); 


export { isPalindrom, findLongestWords };
