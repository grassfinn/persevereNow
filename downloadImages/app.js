// https://byby.dev/node-download-image
// https://www.amiiboapi.com/
const https = require('https');
const fs = require('fs');
const fetch = require('node-fetch');

// const characterList = ['mario', 'zelda', 'link'];
// const characterObject = [];

// const apiLink = 'https://www.amiiboapi.com/api/amiibo/?name=';
const fullList = 'https://amiiboapi.com/api/amiibo/';

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
