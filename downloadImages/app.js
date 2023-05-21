// https://byby.dev/node-download-image
const https = require('https');
const fs = require('fs');
const fetch = require('node-fetch');

const arr = [
  'PIRANHA PLANT',
  'JOKER',
  'HERO',
  //   'BANJO & KAZOOIE',
  'TERRY',
  'BYLETH',
  'MIN MIN',
  'STEVE',
  'SEPHIROTH',
  //   'PYRA / MYTHRA',
  'KAZUYA',
  'SORA',
  'MARIO',
  'DONKEY KONG',
  'LINK',
  'SAMUS',
  'DARK SAMUS',
  'YOSHI',
  'KIRBY',
  'FOX',
  'PIKACHU',
  'LUIGI',
  'NESS',
  'CAPTAIN\nFALCON',
  'JIGGLYPUFF',
  'PEACH',
  'DAISY',
  'BOWSER',
  'ICE CLIMBERS',
  'SHEIK',
  'ZELDA',
  'DR. MARIO',
  'PICHU',
  'FALCO',
  'MARTH',
  'LUCINA',
  'YOUNG LINK',
  'GANONDORF',
  'MEWTWO',
  'ROY',
  'CHROM',
//   'MR. GAME\n& WATCH',
  'META KNIGHT',
  'PIT',
  'DARK PIT',
  'ZERO SUIT SAMUS',
  'WARIO',
  'SNAKE',
  'IKE',
//   'POKÉMON\nTRAINER\n\nSquirtle/Ivysaur/Charizard',
  'DIDDY KONG',
  'LUCAS',
  'SONIC',
  'KING DEDEDE',
  'OLIMAR',
  'LUCARIO',
//   'R.O.B.',
  'TOON LINK',
  'WOLF',
  'VILLAGER',
  'MEGA MAN',
  'Wii Fit TRAINER',
//   'ROSALINA & LUMA',
  'LITTLE MAC',
  'GRENINJA',
  //   'Mii FIGHTER\n\nBrawler / Swordfighter / Gunner',
  'PALUTENA',
  'PAC-MAN',
  'ROBIN',
  'SHULK',
  'BOWSER JR.',
  'DUCK HUNT',
  'RYU',
  'KEN',
  'CLOUD',
  'CORRIN',
  'BAYONETTA',
  'INKLING',
  'RIDLEY',
  'SIMON',
  'RICHTER',
//   'KING K. ROOL',
  'ISABELLE',
  'INCINEROAR',
];

const characterList = ['mario', 'zelda', 'link'];
const characterObject = [];

const apiLink = 'https://www.amiiboapi.com/api/amiibo/?name=';

async function fetchCharacter(name) {
  const data = await fetch(apiLink + name);
  const response = await data.json();
  //   console.log(response.amiibo[0]);
  return response.amiibo;
}

// console.log(roster)
const rosterImg = [];

const roster = arr.map(
  (character) => fetchCharacter(character).then((data) => console.log(data[0].image))
  // downloadImage(data.image, data.character)
);

async function resolvePromiseArr(arr) {
  await Promise.all(arr).then((item) => pushedArr.push(item));
  return pushedArr;
}

function downloadImage(url, name) {
  const file = fs.createWriteStream(`./imageFiles/${name}.png`);
  return https
    .get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`Image downloaded as ${name}`);
      });
    })
    .on('error', (err) => {
      fs.unlink(name);
      console.error(`Error downloading image: ${err.message}`);
    });
}

//! always do one thing as a time!
// fetchCharacter('link').then((item) => {
//   downloadImage(item.image, `${item.character}`);
// });

// downloadImage(imageUrl, imageName);
