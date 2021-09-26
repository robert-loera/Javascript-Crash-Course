//Challenge 1: Age and days
function ageInDays() {
  // prompt user to input birth year
  let birthYear = prompt('What year were you born?')
  // set days variable equal to amount of days
  let days = (2021 - birthYear) * 365
  // create an h1 element to display the days
  let h1 = document.createElement('h1')
  // create text to go into the h1 to display the days
  let textAnswer = document.createTextNode('You are ' + days + ' days old')
  // set the id of the h1 element to days (do this for the reset function)
  h1.setAttribute('id', 'days')
  // append the text to the h1
  h1.appendChild(textAnswer)
  // append the h1 to the flex box in the html file
  document.getElementById('flex-box-result').appendChild(h1)
}
function reset() {
  document.getElementById('days').remove()
}

//Challenge 2
function generateCat() {
  let image = document.createElement('img')
  let div = document.getElementById('flex-cat-gen')
  image.src = "https://picsum.photos/200/300"
  div.appendChild(image)
}

// Challenge 3
function rpsGame(yourChoice) {
  console.log(yourChoice)
  let humanChoice, botChoice
  humanChoice = yourChoice.id
  botChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
  console.log(botChoice)
  results = decideWinner(humanChoice, botChoice) // [1,0] human won
  console.log(results)
  message = finalMessage(results) // {'message': 'You Won', 'color': 'green'}
  console.log(message)
  rpsFrontEnd(yourChoice.id, botChoice, message)
}
function decideWinner(humanChoice, botChoice){
  let rpsDatabase = {
    'rock': {'scissors': 1, 'rock': .5, 'paper': 0},
    'paper': {'rock': 1, 'paper': .5, 'scissors': 0},
    'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
  }

  let yourScore = rpsDatabase[humanChoice][botChoice]
  let computerScore = rpsDatabase[botChoice][humanChoice]

  return[yourScore, computerScore]
}
function finalMessage(results){
  if (results[0] > results[1]) {
    return {'message': 'You Won', 'color': 'green'}
  }
  else if (results[0] < results[1]) {
    return {'message': 'You Lost', 'color': 'red'}
  }
  else {
    return {'message': 'You Tied', 'color': 'yellow'}
  }
}
function rpsFrontEnd(yourChoice, botChoice, message){
  let imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
  //remove all images
  document.getElementById('rock').remove()
  document.getElementById('paper').remove()
  document.getElementById('scissors').remove()

  //show matchup and outcome
  let humanDiv = document.createElement('div')
  let messageDiv = document.createElement('div')
  let botDiv = document.createElement('div')

  humanDiv.innerHTML = "<img src='" + imagesDatabase[yourChoice] + "' height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"

  messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px  '>" + message['message'] + "</h1>"

  botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

  document.getElementById('flex-box-rps-div').appendChild(humanDiv)
  document.getElementById('flex-box-rps-div').appendChild(messageDiv)
  document.getElementById('flex-box-rps-div').appendChild(botDiv)
}

//Challenge 4
let all_buttons = document.getElementsByTagName('button')
console.log(all_buttons)

let copyAllButtons = []
for (let i = 0; i < all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1])
}

console.log(copyAllButtons)

//get value of button


function buttonColorChange(selected) {
  if (selected.value === 'red'){
    buttonsRed();
  }
  else if (selected.value === 'green'){
    buttonsGreen();
  }
  else if (selected.value === 'reset'){
    buttonsReset();
  }
  else if (selected.value === 'random'){
    buttonsRandom();
  }
}

function buttonsRed(){
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    all_buttons[i].classList.add('btn-danger')
  }
}
function buttonsGreen(){
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    all_buttons[i].classList.add('btn-success')
  }
}
function buttonsReset(){
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    all_buttons[i].classList.add(copyAllButtons[i])
  }
}
function buttonsRandom(){
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (let i=0; i < all_buttons.length; i++){
    let randNumber = Math.floor(Math.random() * 4)
    all_buttons[i].classList.remove(all_buttons[i].classList[1])
    all_buttons[i].classList.add(choices[randNumber])
  }
}

//Challenge 5: Blackjack

let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0}
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)

function blackjackHit(){
  let cardImage = document.createElement('img')
  cardImage.src = 'static/images/Q.png'
  document.querySelector(YOU['div']).appendChild(cardImage)
}