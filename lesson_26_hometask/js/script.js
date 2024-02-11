// Строгий режим
"use strict";
/* Hometask */
/* Завдання 1 */
document.addEventListener("click", itemAction);
function itemAction(e) {
    const targetElement = e.target;
    if (targetElement.closest(".item")) {
        document.documentElement.classList.toggle("active");
    }
}
/* Завдання 2 */
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
    document.body.classList.add("loaded");
}
/* Завдання 3 */
const headerElement = document.querySelector(".header");
const footerElement = document.querySelector(".footer");

headerElement.addEventListener("mouseenter", () => {
    footerElement.classList.add("change-color");
});
headerElement.addEventListener("mouseleave", () => {
    footerElement.classList.remove("change-color");
});
/* Завдання 4 */
let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
            const startNumber = parseFloat(itemElement.dataset.start);
            const finishNubmer = parseFloat(itemElement.dataset.finish);
            const delayNumber = parseFloat(itemElement.dataset.delay);
            observer.unobserve(itemElement);
            let i = startNumber;
            let timer = setInterval(() => {
                itemElement.textContent = i;
                console.log(i);
                i === finishNubmer ? clearInterval(timer) : null;
                ++i;
            }, delayNumber);
        } else {
            console.log("я тебе не бачу");
        }
    });
};

let observer = new IntersectionObserver(callback, options);
const itemElement = document.querySelector(".item-scroll");
observer.observe(itemElement);

// const someObject = {
//     name: "Жека",
//     age: 39,
// };
// const secondObject = {
//     name: "vas",
//     age: 20,
// };
// secondObject.age = 18;
// console.log(secondObject);

// const windowSize = {
//     width: window.innerWidth,
//     height: window.innerHeight,
// };
// console.log(windowSize.width);

// const link = document.querySelector(".link");

// link.addEventListener("click", clickReaction);
// link.addEventListener("mouseenter", clickReaction);
// link.addEventListener("mouseleave", clickReaction);
// link.addEventListener("mousemove", clickReaction);
// function clickReaction() {
//     console.log("Click!");
// }

const links = document.querySelectorAll(".link");

links.forEach((links) => {
    links.addEventListener("click", clickReaction);
    // links.addEventListener("mouseenter", clickReaction);
    // links.addEventListener("mouseleave", clickReaction);
    // links.addEventListener("mousemove", clickReaction);
});

function clickReaction(event) {
    // console.log(event);
    // console.log(event.type);
    // console.log(event.target);
    // const tag = event.target.tagName;
    // if (tag === "BUTTON") {
    //     alert("BUTTON");
    // }
    // event.preventDefault();
    // console.log(event.clientX);
    // console.log(event.clientY);
    // console.log(event.pageX);
    // console.log(event.pageY);
}
// document.addEventListener("click", documentAction);
// function documentAction(event) {
//     console.log("Click!");
//     const targetElement = event.target;
//     console.log(targetElement);

//     if (targetElement.closest(".link")) {
//         console.log("це линк");
//         event.preventDefault();
//     }
//     if (targetElement.closest(".button")) {
//         console.log("це button");
//         event.preventDefault();
//     }
// }

// window.addEventListener("scroll", windowScroll);
// function windowScroll(event) {
//     console.log(window.scrollY);
// }

// let options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     // Відсоток від розміру об'єкту.
//     // При появі якого спрацьовує подія
//     // Де 0 це будь яка поява
//     // 100 це повна поява об'кта в в'юпорті
//     threshold: 0.3,
// };

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target;
//         if (entry.isIntersecting) {
//             targetElement.classList.add("show");
//             console.log("я тебе бачу");
//         } else {
//             targetElement.classList.remove("show");
//             console.log("я тебе не бачу");
//         }
//     });
// };
// let observer = new IntersectionObserver(callback, options);

// const target = document.querySelector(".button");
// observer.observe(target);

// let someElements = document.querySelectorAll("[class*='--anim']");
// someElements.forEach((someElement) => {
//     observer.observe(someElement);
// });

// window.addEventListener("DOMContentLoaded", domLoaded);
// function domLoaded(event) {}
// window.addEventListener("load", pageLoaded);
// function pageLoaded(event) {
//     document.documentElement.classList.add("loaded");
// }
// function someFunc() {
//     console.log("go");
// }
// setTimeout(() => {
//     someFunc();
// }, 5000);

// let i = 5;
// let timer = setInterval(() => {
//     console.log(i);
// });

// document.addEventListener("click", documentAction);
// function documentAction(e) {
//     const targetElement = e.target;
//     if (targetElement.closest(".icon-menu")) {
//         document.documentElement.classList.toggle("menu-open");
//     } else if (targetElement.closest(".menu__link")) {
//         if (document.documentElement.classList.contains("menu-open")) {
//             document.documentElement.classList.remove("menu-open");
//         }
//         const link = targetElement.closest(".menu__link");
//         const goto = link.dataset.goto;
//         const gotoElement = document.querySelector(goto);
//         if (gotoElement) {
//             gotoElement.scrollIntoView({
//                 behavior: "smooth",
//             });
//         }
//     }
// }
