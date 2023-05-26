function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));

// The_Andy_Griffith_Show
// This Is Spinal Tap
// thisIsSpinalTap
// The_Andy_Griffith_Show
// Teletubbies say Eh-oh
// AllThe-small Things
