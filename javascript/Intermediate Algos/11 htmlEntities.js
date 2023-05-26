function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  const strToArr = str.split('');
  const replacedEntity = strToArr
    .map((item) => entities[item] || item)
    .join('');
  return replacedEntity;
}

convertHTML("Schindler's List");
