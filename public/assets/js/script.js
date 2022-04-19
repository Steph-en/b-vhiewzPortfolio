// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
})

// Toggle nav
const firstLogo = document.querySelector(".logo1")
const aside = document.querySelector(".aside")
const on = document.querySelector(".bars")
const off = document.querySelector(".times")

on.addEventListener('click', () => sideBar('on'))
off.addEventListener('click', () => sideBar('off'))

const sideBar = (toggleState) => {
  if(toggleState === 'on'){
    aside.classList.add('show-nav')
    off.style.display = 'block'
    on.style.display = 'none'
  } else{
    aside.classList.remove('show-nav')
    on.style.display = 'block'
    off.style.display = 'none'
  }
}

// Pop Up
// const popup = document.querySelector(".popup") 
// const colorBox = document.querySelector(".colorbox")
// const timesBtn = document.querySelector(".off")

// colorBox.addEventListener('click', () => popUp('up'))
// timesBtn.addEventListener('click', () => popUp('down'))


// const popUp = (toggleState) => {
//   if(toggleState === 'up') {
//     popup.classList.add('show-pop')
//     timesBtn.style.display = 'block'
//   } else {
//     popup.classList.remove('show-pop')
//     timesBtn.style.display = 'none'
//   }
// }


// Jquery script for the text canvas
$(document).ready(function (){
  if(!$("#myCanvas").tagcanvas({
    textColour: "#08fdd8",
    outlineColour: "transparent",
    reverse: true,
    dept: 0.8,
    maxSpeed: 0.09,
    weight: true,
  }, "tags")){
    //something went wrong hide the canvas
    $("#myCanvasContainer");
  }
})

// Confirmation Email
const contactForm = document.querySelector('.contact-form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email sent');
      name.value = '';
      email.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Something went wrong');
    }
  }
  xhr.send(JSON.stringify(formData))
})
