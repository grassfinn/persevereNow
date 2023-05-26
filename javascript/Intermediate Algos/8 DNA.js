function pairElement(str) {
  const dnaPair = [...str];

  function matchPairs(char) {
    switch (char) {
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
      case 'C':
        return ['C', 'G'];
      case 'G':
        return ['G', 'C'];
    }
  }

  const dnaStrand = dnaPair.map(matchPairs);

  return dnaStrand;
}

console.log(pairElement('GCG'));
