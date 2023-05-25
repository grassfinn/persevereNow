function translatePigLatin(str) {
  let regex = /^[^aeiou]+/;
  //   targets the consonants at the beginning of the word
  let consonants = str.match(regex);
  console.log(consonants);
  //   replace returns a new str
  let removedConsonants = str.replace(regex, ''); //remove consonants at the beginning
  //   if there are no consonants at start of the word add "way" at the end
  if (!consonants) {
    return (str += 'way');
  }
  //   else add remove consonants and them and "ay" at the end
  return removedConsonants + consonants + 'ay';
}

console.log(translatePigLatin('consonant'));
