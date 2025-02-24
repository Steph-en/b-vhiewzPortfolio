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

// Alert on Contact Button Click
function contFunc() {
    alert("Email me: jakeamponsah2019@gmail.com");
}

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

// Start of Tawk.to Script

var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/62863ac37b967b1179903462/1g3e5b43e";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

const imageSets = {
    random: [
        "/assets/images/catalog/random/use-this-as-cover.png",
        "assets/images/catalog/random/BM-ADS-FLYERS-02.png",
        "assets/images/catalog/random/bm-emulsion.png",
        "assets/images/catalog/random/bm-matt.png",
        "assets/images/catalog/random/felicia-dwomoh-2.png",
        "assets/images/catalog/random/GO-WIRELESS-mockup-2.png",
        // "assets/images/catalog/random/BRAND-IDENTITY.png",
        // "assets/images/catalog/random/Screenshot 2025-02-19-075121.png",
        // "assets/images/catalog/random/Screenshot-2025-02-19-074920.png",
        // "assets/images/catalog/random/sofo-maame-vivian-bd-flyer-mummy.png",
        // "assets/images/catalog/random/tshirts_on_hangers-black.png",
    ],
    illustration: [
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/Use-this-as-cover.png",
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/11.png",
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/12.png",
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/2.png",
    ],
    "ui-ux": [
        "assets/images/catalog/UI-UX/USE-THIS-AS-UI-UX-COVER.jpeg",
    ],
    "3d": [
        "assets/images/catalog/3d/aslan.gif",
        "assets/images/catalog/3d/bm-graffiato.gif",
    ],
    logofolio: [
        "assets/images/catalog/Logofolio/USE-THIS-AS-COVER.png",
        "assets/images/catalog/Logofolio/logofolio-02.png",
        "assets/images/catalog/Logofolio/logofolio-02.pn3",
        "assets/images/catalog/Logofolio/logofolio-02.png4",
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