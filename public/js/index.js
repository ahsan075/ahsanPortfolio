// ===VARIABLES===//

let bar = document.querySelector(".toggle-bar");
let toggle = document.querySelector(".navbar");
let menuName = document.querySelector(".menu1");
let first = document.querySelector(".openfirst");
let svg = document.querySelector("svg");
let span1 = document.querySelector(".span1");
let list = document.querySelectorAll(".list-item");
let menu = document.querySelector(".contain");
let listDiv = document.querySelector(".list");
let welcome = document.querySelector(".welcome");
let blink = document.querySelector(".blink");
let welcome1 = document.querySelector(".welcome1");
let welcome2 = document.querySelector(".welcome2");
let sectionAbout = document.querySelector(".aboutSection");
let image = document.querySelector(".fig");
let section1 = document.querySelector(".main_header");
let section2 = document.querySelector(".section2");
let card = document.querySelectorAll(".card");
let skillHeading = document.querySelector(".skillHeading");
let skillh1 = document.querySelector("#skill-h1");
let result = false;
let aboutbox = document.querySelector(".aboutBox");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let about = document.querySelector("#about");
let aboutBox = document.querySelector(".aboutBox");
let aboutpara = document.querySelector(".aboutpara");
let aboutMainPara = document.querySelector(".aboutparaMain");

// === TOGGOLE BAR CLICKING EVENTS ===//

bar.addEventListener("click", function () {
    toggle.classList.remove("closeup");
    if (!result) {
        menu.classList.remove("menuActive");
        bar.classList.add("open");
        bar.classList.remove("close");
        menuName.innerText = "CLOSE";
        toggle.classList.add("openup");
        svg.classList.add("svgup");
        span1.classList.add("span1up");
        list.forEach((e) => {
            e.addEventListener("click", function () {
                list.forEach((li) => li.classList.remove("active"));
                this.classList.add("active");
            });
        });
        result = true;
    } else {
        if (window.scrollY > 0) {
            menu.classList.add("menuActive");
        }
        toggle.classList.remove("openup");
        bar.classList.remove("open");
        bar.classList.add("close");
        menuName.innerText = "MENU";
        svg.classList.remove("svgup");
        span1.classList.remove("span1up");
        result = false;
    }
});

// === WELCOME ANIMATION ===//

section1.style.display = "none";
sectionAbout.style.display = "none";

setTimeout(() => {
    welcome.style.width = "0%";
    menu.classList.remove("yes");
    blink.style.display = "none";
    welcome1.style.display = "none";
    welcome2.style.display = "none";
}, 2000);

setTimeout(() => {
    welcome.style.display = "none";
    section1.style.display = "flex";
    sectionAbout.style.display = "flex";
}, 3000);

let query = window.matchMedia("(max-width:1050px)");
let query2 = window.matchMedia("(min-width:577px)");
const insert = document.querySelector(".main_header_right");

const template = (src) => {
    return ` <img src=${src} alt="Ahsan" class="img-fluid fig" title="Ahsan Shakil">`;
};

// IMAGE QUERY //

window.addEventListener("DOMContentLoaded", function (e) {
    console.log(window.innerWidth);
    if (query.matches && query2.matches) {
        insert.innerHTML = template("images/port2.png");
    } else {
        insert.innerHTML = template("images/croped.png");
    }
});

window.addEventListener("resize", function (e) {
    console.log(window.innerWidth);
    if (query.matches && query2.matches) {
        insert.innerHTML = template("images/port2.png");
    } else {
        insert.innerHTML = template("images/croped.png");
    }
});

//=== Scroll Function ===//

const aboutbottom = document.getElementById("about");

window.addEventListener("scroll", function () {
    let screenPosition = window.innerHeight / 1.7;
    let contentPosition = sectionAbout.getBoundingClientRect().top;

    if (section1.classList.contains("scrollon")) {
        section1.style.opacity = 1 - +window.pageYOffset / 500 + "";
        section1.style.top = +window.pageYOffset / 2 + "px";
        section1.style.backgroundPositionY = -+window.pageYOffset + "px";
    }
    aboutbottom.classList.toggle(
        "aboutbottom",
        contentPosition < screenPosition
    );
});
