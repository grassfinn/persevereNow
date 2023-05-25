const friends = ['joe','bill','bob','ann']

const body = document.body


const elements = friends.map(friend => {
    return `<h1>${friend}</h1>`
})


// innerHtml
elements.forEach(element => body.innerHTML +=element)

// create nodes individually
// show examples of my old code
friends.forEach(friend => {
    const p = document.createElement('p')
    p.textContent = friend
    p.className = friend
    body.append(p)
})