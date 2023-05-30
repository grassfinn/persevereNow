class Person {
  constructor(name) {
    this.name = name;
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }
  getLastName() {
    return this.name.split(' ')[1];
  }

  getFullName() {
    console.log(this.name);
    return this.name;
  }

  setFirstName(name) {
    this.name = `${name} ${this.name.split(' ')[1]}`;
    return this.name;
  }
  setLastName(name) {
    this.name = `${this.name.split(' ')[0]} ${name}`;
    return this.name;
  }
  setFullName(name) {
    this.name = name;
  }
}

const bob = new Person('Bob Ross');

// Factory Function
// const Person = function (firstAndLast) {
//   let fullName = firstAndLast;

//   this.getFirstName = function () {
//     return fullName.split(' ')[0];
//   };
//   this.getLastName = function () {
//     return fullName.split(' ')[1];
//   };

//   this.getFullName = function () {
//     console.log(fullName);
//     return fullName;
//   };

//   this.setFirstName = function (name) {
//     fullName = `${name} ${fullName.split(' ')[1]}`;
//     return fullName;
//   };
//   this.setLastName = function (name) {
//     fullName = `${fullName.split(' ')[0]} ${name}`;
//     return fullName;
//   };
//   this.setFullName = function (name) {
//     fullName = name;
//   };
// };

// const bob = new Person('Bob Ross');
// bob.setFirstName('Haskell');
// bob.setLastName('Curry');
// bob.getFullName();
