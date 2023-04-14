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
const links = document.querySelector(".links")

on.addEventListener('click', () => sideBar('on'))
off.addEventListener('click', () => sideBar('off'))
links.addEventListener('click', () => sideBar('off'))

const sideBar = (toggleState) => {
    if (toggleState === 'on') {
        aside.classList.add('show-nav')
        off.style.display = 'block'
        on.style.display = 'none'
    } else {
        aside.classList.remove('show-nav')
        on.style.display = 'block'
        off.style.display = 'none'
    }
}


// Expanding Cards
const Panels = document.querySelectorAll('.panel')

Panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    Panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Animated H1 Text  
var typed = new Typed(".text", {
    strings: ["graphic designer.", "content creator.", "digital artist."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
})

// venobox
new VenoBox({
    selector: '.venobox',
});

// Hide and show images
const More = document.querySelectorAll('.show-btnW');
const Lists = document.querySelectorAll('li');

function showFunc() {
    Lists.forEach((li) => {
        li.addEventListener('click', () => {
            li.classList.remove('nact');
        });
    });
    // alert('hi')
};

// function hideFunc(){
//     Nact.classList.add('.nact');
// };

// Jquery script for the text canvas
$(document).ready(function () {
    if (!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        dept: 0.8,
        maxSpeed: 0.1,
        weight: true,
    }, "tags")) {
        //something went wrong hide the canvas
        $("#myCanvasContainer");
    }
})


