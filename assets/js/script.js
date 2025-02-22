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
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    Panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Animated H2 Text  
var typed = new Typed(".text", {
    strings: ["Graphic Designer.", "Content Creator.", "Digital Artist."],
    typeSpeed: 50,
    backSpeed: 50,
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
};

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

// Image Gallery
// const images = [
//     "/assets/images/catalog/random/use-this-as-cover.png",
//     "assets/images/catalog/random/BM-ADS-FLYERS-02.png",
//     "assets/images/catalog/random/bm-emulsion.png",
//     "assets/images/catalog/random/bm-matt.png",
//     "assets/images/catalog/random/felicia-dwomoh-2.png",
//     "assets/images/catalog/random/GO-WIRELESS-mockup-2.png",
//     "assets/images/catalog/random/BRAND-IDENTITY.png",
//     "assets/images/catalog/random/Screenshot 2025-02-19-075121.png",
//     "assets/images/catalog/random/Screenshot-2025-02-19-074920.png",
//     "assets/images/catalog/random/sofo-maame-vivian-bd-flyer-mummy.png",
//     "assets/images/catalog/random/tshirts_on_hangers-black.png",
//     "assets/images/catalog/random/use-this-as-cover.png",
// ];

// let currentImageIndex = 0;
// const displayedImage = document.getElementById("displayed-image");
// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");
// const imageCounter = document.getElementById("image-counter");

// function updateImage() {
//     displayedImage.src = images[currentImageIndex];
//     imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
// }

// updateImage();

// prevButton.addEventListener("click", () => {
//     currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//     updateImage();
// });

// nextButton.addEventListener("click", () => {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     updateImage();
// });

const imageSets = {
    random: [
        "/assets/images/catalog/random/use-this-as-cover.png",
        "assets/images/catalog/random/BM-ADS-FLYERS-02.png",
        "assets/images/catalog/random/bm-emulsion.png",
        "assets/images/catalog/random/bm-matt.png",
        "assets/images/catalog/random/felicia-dwomoh-2.png",
        "assets/images/catalog/random/GO-WIRELESS-mockup-2.png",
        "assets/images/catalog/random/BRAND-IDENTITY.png",
        "assets/images/catalog/random/Screenshot 2025-02-19-075121.png",
        "assets/images/catalog/random/Screenshot-2025-02-19-074920.png",
        "assets/images/catalog/random/sofo-maame-vivian-bd-flyer-mummy.png",
        "assets/images/catalog/random/tshirts_on_hangers-black.png",
        "assets/images/catalog/random/use-this-as-cover.png",
    ],
    illustration: [
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/Use-this-as-cover.png",
        // ... more images for illustration
    ],
    "ui-ux": [
        "assets/images/catalog/UI-UX/USE-THIS-AS-UI-UX-COVER.jpeg",
        // ... more images for ui-ux
    ],
    "3d": [
        "assets/images/catalog/3d/final_1_1GHANA-ezgif.com-speed.gif",
        // ... more images for 3d
    ],
    logofolio: [
        "assets/images/catalog/Logofolio/USE-THIS-AS-COVER.png",
        // ... more images for logofolio
    ],
};

const tabContent = document.getElementById('myTab');
let currentImageIndex = 0;
let currentTab = "random"; // Initialize with the default tab
const displayedImage = document.getElementById("displayed-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const imageCounter = document.getElementById("image-counter");

function updateImage() {
    displayedImage.src = imageSets[currentTab][currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${imageSets[currentTab].length}`;
}

function showTab(tabId) {
    currentTab = tabId;
    currentImageIndex = 0;
    updateImage();
}

updateImage(); // Initial image display

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + imageSets[currentTab].length) % imageSets[currentTab].length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % imageSets[currentTab].length;
    updateImage();
});

tabContent.addEventListener('click', function (event) {
    if (event.target.classList.contains('nav-link')) {
        const tabId = event.target.getAttribute('href').substring(1);
        showTab(tabId);
        // Remove active class from all tabs, and add to the clicked tab.
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }
});