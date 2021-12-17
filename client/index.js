console.log('index.js loaded')

const fullMenuBtn = document.querySelector('#all')
const categoryBtn = document.querySelectorAll('#.categ-btns')

const menuContainer = document.querySelector('')

const baseURL = 'http://localhost:4011'


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}