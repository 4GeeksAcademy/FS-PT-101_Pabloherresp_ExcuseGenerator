import "bootstrap"
import "./style.css"

import "./assets/img/rigo-baby.jpg"
import "./assets/img/4geeks.ico"

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'Javier', 'The president', 'An alien', 'I']
  let action = ['ate', 'peed', 'crushed', 'broke']
  let what = ['my homework', 'my phone', 'the car']
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']

  let dictionary = [who, action, what, when]


  //function that returns a random value between 0 and the given parameter
  const rnd = length => Math.floor(Math.random() * length)

  //function that returns one element of the array in a random position
  const getWord = array => array[rnd(array.length)]

  //function that combines 1 element of each given array into one string and returns it already spaced - just a way of showing the text in console
  const fusion = (a, b, c, d) => `${getWord(a)} ${getWord(b)} ${getWord(c)} ${getWord(d)}`


  //resultados en consola
  console.log("Result ---> " + fusion(who, action, what, when))

  //mostrar en HTML
  const printHTML = (el,index) => el.innerHTML = getWord(dictionary[index]);
  [...document.getElementById("excuse").children].forEach(printHTML)


  console.log("Hello Rigo from the console!")
};
