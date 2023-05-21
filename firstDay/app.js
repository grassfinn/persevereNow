const button = document.querySelector('button')
const list = document.querySelector('.list')
button.addEventListener('click', (e)=> {
    e.preventDefault()
    const listItem = document.createElement('li')
    const breed = document.querySelector('#breed')
    const dogName = document.querySelector('#name')
    listItem.textContent = `${dogName.value} ${breed.value}`
    list.append(listItem)
})