let colorbutton = document.querySelector('button')
let body = document.querySelector('body')
let nameBox = document.querySelector('#nameBox')
let theControl = document.querySelector('div#theControl')
let displayText = document.querySelector('h1.Back')
let cont = document.querySelector('#Continue')
let topHeader = document.querySelector('#top')
let subHeader = document.querySelector('#sub')
let favColor = document.querySelector('#favColor')
let thanksButton = document.querySelector('#thanksButton')


const colorSet= () => {
    favColor.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
     event.preventDefault()
     User.color = favColor.value
     body.style.backgroundColor = User.color
     if (body.style.backgroundColor === 'olivedrab') {
        topDialog(`Hmmm I don't know that color`, `Let's try a different one:`)
        colorSet()
     } else if (User.color === 'black') {
        topDialog('Ooooo edgy', '')
        thanksButton.innerText = `I'm so emo`
        nextInput(favColor, thanksButton)
     } else if (User.color === 'white') {
        body.style.color = 'black'
        topDialog('Makin me change the font too, huh?', ``)
        thanksButton.innerText = `You know it!`
        nextInput(favColor, thanksButton)
     } else {
        topDialog(`Nice color!`, ``)
        thanksButton.innerText = `Thank you!`
        nextInput(favColor, thanksButton)
     }
    }
})
}

const nextInput = (from, to) => {
    from.style.display = 'none'
    to.style.display = 'block'
}

const topDialog = (h1, h2) => {
    topHeader.innerText = h1
    subHeader.innerText = h2
}

const User = {}

let count = 0

colorbutton.addEventListener('click', () => {
    if (count === 0) {
        body.style.backgroundColor  = 'white'
        count ++
    } else {
        body.style.backgroundColor  = 'olivedrab'
        topDialog('Thank you', "What should I call you?")
        nextInput(colorbutton, nameBox)
        
    }
})
    nameBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
         event.preventDefault()
         User.name = nameBox.value
         body.style.backgroundColor  = 'white'
         displayText.innerText = `Hello ${User.name}!`
         nextInput(nameBox, cont)
         
     }
    })
    cont.addEventListener('click', () => {
        body.style.backgroundColor  = 'olivedrab'
        displayText.innerText = ``
        topDialog(`I feel bad for making you change the color back`, `How about we use your favorite color?`)
        nextInput(cont, favColor)
        colorSet()
    })
    thanksButton.addEventListener('click', () => {
        topDialog(`More coming soon...`, ``)
        thanksButton.style.display = 'none'
    })


