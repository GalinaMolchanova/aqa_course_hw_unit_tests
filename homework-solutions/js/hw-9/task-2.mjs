/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error("Invalid type");
  }

  characters.push(character); 
};

function getCharacter(name) {
  const character  = characters.find((element) => element.name === name);
  return character;
};

function getCharactersByAge(minAge) {
  if (typeof(minAge) === 'number') {
    return characters.filter((element) => element.age >= minAge);
  } else { 
    throw new Error("Invalid type");
  }
};

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  
  if (!character) throw new Error("Invalid Character"); 

  Object.assign(character, newCharacter); 

  return character; 
}

function removeCharacter(name) {
  const character = getCharacter(name);
  if (!character) throw new Error("Invalid Character"); 
  const index = characters.findIndex((element) => element.name === name);
  characters[index] = characters.splice(index, 1);
  return characters[index]; 
};

removeCharacter('Jack');
console.log(characters);

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
