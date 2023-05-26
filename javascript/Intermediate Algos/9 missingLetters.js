function fearNotLetter(str) {
  const ascii = [...str].map((char) => char.charCodeAt());
  let currentCharCode = str.charCodeAt(0);
  let missing = undefined;

  ascii.forEach((item) => {
    if (item === currentCharCode) {
      return currentCharCode++;
    }
    return (missing = String.fromCharCode(currentCharCode));
  });

  return missing;
}
console.log(fearNotLetter('abce'));
