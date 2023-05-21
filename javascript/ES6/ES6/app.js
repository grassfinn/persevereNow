// Creating Elements


//! Arrow Function
const listMaker = (listItems = [], listType = 'ul') => {
    //check if array is empty
    if (!listItems.length){
        listItems[0] = 'Bill'
        listItems[1] = 'Bob'
    }
  const element = `
	<${listType}>
  	<li>${listItems[0]}</li>
    <li>${listItems[1]}</li>
  </${listType}>
`;
  return element;
};
const body = document.body
console.log(document.body);
document.body.innerHTML += listMaker();

//! Default Parameters
function createElement(element = 'div', name = 'World', content = 'Hello ') {
  return `
    <${element}>
    ${content + name}
        </${element}>
        `;
}

document.body.innerHTML += createElement('h1', 'Mr. Harper');

function logNumbers(...numbers){
    // console.log(numbers)
}

logNumbers(1,2,3,4,5)

// use for of loop to generate HTML then show other methods
// using spread
const h2 = document.createElement('h2')
const input = document.createElement('input')
const button = document.createElement('button')
h2.textContent = 'Shopping List'
button.textContent = 'Add to list'
document.body.append(h2)
document.body.append(input)
document.body.append(button)


button.addEventListener('click',handleClick)
function displayList(...items){
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    div.append(ul)
    document.body.append(div)
    // for (item of items){
        items.map(item => {

            const li = document.createElement('li')
            ul.append(li)
            li.textContent = item
        })
    // }
}

let shoppingList = []
function handleClick(e){
    if (input.value === ''){
        return
    }
    shoppingList.push(input.value)
    displayList(...shoppingList)
    shoppingList = []
    input.value = ''
}