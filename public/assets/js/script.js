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


//h1 Bounce effect
// $(document).ready(function () {
//   var letters = $('.ha').text();
//   var nHTML = '';
//   for (var letter of letters) {
//     nHTML += "<span class='a'>" + letter + "</span>";
//   }
//   $('.ha').html(nHTML);
// })

// $(document).ready(function () {
//   var letters = $('.hs').text();
//   var nHTML = '';
//   for (var letter of letters) {
//     nHTML += "<span class='a'>" + letter + "</span>";
//   }
//   $('.hs').html(nHTML);
// })




// Animated text
// var typed = new Typed(".text", {
//   strings: ["graphic designer.", "content creator.", "animator.", "digital artist."],
//   typeSpeed: 60,
//   backSpeed: 60,
//   loop: true
// })

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
