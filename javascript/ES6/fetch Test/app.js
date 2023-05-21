const img = document.querySelector('img')


async function getData(name){
   const request = await fetch(`./json files/${name}.json`)
    const data = await request.json()
    return data
}

async function displayData(character){
    const versions = await character.amiibo;
    const [first, second] = await versions;
    img.src = second.image;
}

// getData('zelda').then(character => {
//     const versions = character.amiibo
//     const [first, second] = versions
//     img.src = second.image
// })
displayData(getData('zelda'))