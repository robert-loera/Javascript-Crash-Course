//Challenge 1: Age and days
function ageInDays() {
  let birthYear = prompt('What year were you born?')
  let days = (2021 - birthYear) * 365
  let h1 = document.createElement('h1')
  let textAnswer = document.createTextNode('You are ' + days + ' days old')
  h1.setAttribute('id', 'days')
  h1.appendChild(textAnswer)
  document.getElementById('flex-box-result').appendChild(h1)
}
function reset() {
  document.getElementById('days').remove()
}
