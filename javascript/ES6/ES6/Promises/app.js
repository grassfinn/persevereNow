//www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

function onMyBirthDay(isSick = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isSick) {
        return resolve(2);
      }
      return reject(new Error('I am Sad'));
    }, 2000);
  });
}

onMyBirthDay(true)
  .then((result) => console.log(`I can have ${result} cakes`))
  .catch((err) => console.log(err))
  .finally(() => console.log("Le's party!"));

// Guessing Game

function enterNumber() {
  const userNumber = Number(prompt('Enter a number between 1 and 6'));
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const gameObj = {
    points: 0,
    randomNumber,
    userNumber,
  };
  return new Promise((resolve, reject) => {
    if (isNaN(userNumber)) {
      console.log(userNumber);
      return reject(new Error('Please enter a number between 1 & 6'));
    }

    if (userNumber === randomNumber) {
      return resolve({
        ...gameObj,
        points: 2,
      });
    } else if (
      userNumber === randomNumber + 1 ||
      userNumber === randomNumber - 1
    ) {
      return resolve({
        ...gameObj,
        points: 1,
      });
    }
    return resolve(gameObj);
  });
}

enterNumber().then((result) => console.log(result));
