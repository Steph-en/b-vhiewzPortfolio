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
    randoms: [
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/uwpi5xmzywhy6ylexvwo",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/sx446ydsydux4dbcboto",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/trk2lwnncqicn1oywshp",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/blmmotqdfsus9floewsn",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/coweawy6sjkvayygma1g",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/ex4okgv2omhtlaw35cdj",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/peppscf3vqmlhmoss0tm",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/x3nndc8u3cypm8ghfa7l",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/rirlsurxtuwmt7yrg08b",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/rq5jl4vwemz5xoly9zee",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/hju1wgfmhcutyuu2bn6p",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/z6c20ayayqjaiy4mqcex",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/b25dintqj9al1teeyfix",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/mdpwfnurvccsrylmhqau",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/p6gzy2x0giuqbtugcxxi",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/mrqlqgc09jqbsslbw7tm",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/jwng0764qqzhmxhm1ov5",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v5gxosnighpsv4drbntr",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/jsx45k254uaijsygos5a",
    ],
    illustration: [
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/lcvbgyj49cdgrfez0lyg",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/lxtgypf8k43zsmbvm2gv",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/sujebgi60edjkdu3owsz",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/cwqletau0cnt2rhvzkax",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/o99temhmlox0txjw5en1",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/ctxrgs9eruyfrjkqbkur",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/lswjnxoxesr0jok53utz",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/gdxk3ucgeuu2whblerul",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/kih3hipvk05pluwnue1j",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/xizizdu0jlqtqd2dnfsb",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/ctip8ut1fj1b7tgrb1ab",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/vzyo0krukwayvmgejn6v",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/u8y4d9lzzl4203omaqo0",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/kafbyvlfud4z6wi1rnm3",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/udw3szw2kftjumxocuob",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/k3pfmx6hrui3txci0fit",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/zpnm6putm9smpermkhqp",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/gbmg9w1nth5gywgklrhj",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/fj1bse5sjbf4wptgtust",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/ebkgt7xxt0hzku4mbgp5",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/pobjgvoc78cp8ugmadnl",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/eexl1seegyx4f5qwpcgb",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/ihrgtpjsmnjwrr3dd12n",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/gijt3vcegptdhwbghbq4",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/d8v9kup9rrj42bwdmasx",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/xtvqqirmbog4fnremcei",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/mtoqbpkwe8fwt6z14lql",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/pq58avrqgn46y4egjov2",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/wzrimpz1otenc2ve3kwx",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/Illustration/alkmf7mkgeyvnv5hgsf2",
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/post 2 (1)-min.png",
        "assets/images/catalog/iLLUSTRATIONS-AND-CONCEPT-ART/post-min.png",
    ],
    "ui-ux": [
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/ui/lb49d3a7f8gjjivucj7v",
    ],
    "3d": [
        "assets/images/catalog/3d/aslan.gif",
        "assets/images/catalog/3d/bm-graffiato.gif",
    ],
    logofolio: [
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/jwmydrcryak7oh85nb5r",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/wjpmc7cw3gfechjjofrq",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/khwdxcsveikyrzkj4o5c",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/zzgeveqjvlhh2k5hrm5n",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/q2ajsdyildtme4yet2ni",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/m4pjlik1oipcmzfqqkxk",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/ru6rqfh5hsd1nzbgsqhg",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/dzo6phmfwogog8hm2ggr",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/b6rw5pxtwrjngtd1iibx",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/sxzb0qaefyycpidxmgkb",
        "https://res.cloudinary.com/degd6ahfu/image/upload/f_auto,q_auto/v1/logo/gzwnyr4gfciwxn3awbof",
    ],
};

const tabContent = document.getElementById('myTab');
let currentImageIndex = 0;
let currentTab = "randoms"; // Initialize with the default tab
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