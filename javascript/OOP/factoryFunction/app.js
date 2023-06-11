const personFactory = (name, age) => {
  const greeting = () => `Hello my names is ${name} and I am ${age} years old`;
  return { name, age, greeting };
};

const billy = personFactory('billy', 52);

const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  //   returning the obj with what we want
  return { printString };
};

const taco = FactoryFunction('taco');

// taco.capitalizeString(); // ERROR!!
// console.log(taco)
// taco.printString(); // this prints "----TACO----"

const Player = (name, level) => {
  let health = level * 2;
  const getHp = () => health;
  const getLevel = () => level;
  const getName = () => name;
  const dead = () => {
    console.log(`${name} has died!`);
  };
  const dmg = (x) => {
    health -= x;
    if (health <= 0) {
      dead();
    }
  };
  const attack = (npc) => {
    if (npc.getHp() <= 0) {
      console.log('He is dead already you cannot attack him anymore!');
      return;
    } else if (level < npc.getLevel()) {
      dmg(1);
      console.log(`${npc.getName()} has damaged ${name}`, health);
      return;
    }

    npc.dmg(1);
    console.log(`${name} has damaged ${npc.getName()}`, npc.getHp());
  };
  return { attack, dmg, getLevel, getName, getHp };
};

const hero = Player('Bill', 10);
const baddie = Player('Jim', 2);
// console.log(hero);
hero.attack(baddie);
hero.attack(baddie);
hero.attack(baddie);
hero.attack(baddie);

// IIFE
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();
