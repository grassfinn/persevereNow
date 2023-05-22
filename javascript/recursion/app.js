// 2) A Parser:
// a company directory
// a file directory
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT Music, etc.
const artistsByGenre = {
  jazz: ['Miles Davis', 'John Coltrane'],
  rock: {
    classic: ['Bob Seger', 'The Eagles'],
    hair: ['Def Leppard', 'Whitesnake', 'Poison'],
    alt: {
      classic: ['Pearl Jam', 'The Killers'],
      current: ['Joywave', 'Sir Sly'],
    },
  },
  unclassified: {
    new: ['Caamp', 'Neil Young'],
    classic: ['Seal', 'Morcheeba', 'Chris Stapleton'],
  },
};

console.log(Object.keys(artistsByGenre).forEach(key => {
    console.log(artistsByGenre[key])
}))

const getArtistNames = (dataObj, arr = []) => {
    // returns the keys(first part of the obj)
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }
    getArtistNames(dataObj[key], arr);
  });
  return arr;
};

console.log(getArtistNames(artistsByGenre))