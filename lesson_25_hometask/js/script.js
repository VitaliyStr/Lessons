// Строгий режим
"use strict";

/* hometask */

/* Завдання №1 */
const body = document.body;
console.log(body);
/* Завдання №2*/
function addList(amount = 5) {
    const createUl = document.createElement("ul");
    for (let i = 1; i <= amount; ++i) {
        const createLi = document.createElement("li");
        createLi.innerText = `Пункт списку ${i}`;
        createUl.appendChild(createLi);
    }
    body.insertAdjacentElement("afterbegin", createUl);
}
addList(10);
/* Завдання №3 */
body.classList.add("loaded");
if (body.classList.contains("loaded")) {
    body.style.color = `green`;
}
/* Завдання № 4*/
const items = document.querySelectorAll(".item");
console.log(items);

if (items.length) {
    items.forEach((item, index) => {
        item.classList.add("active");
        item.textContent = `Element № ${++index}`;
        console.log(item);
    });
}
/* Завдання № 5*/
const button = document.querySelector(".button");
if (button) {
    button.scrollIntoView({
        behavior: "smooth",
    });
}

/* Завдання №6 */
const link = document.querySelector(".link");
let dataAmount = parseFloat(link.dataset.amount);
console.log(dataAmount);
if (dataAmount < 200) {
    link.style.color = `red`;
}

// Practice

// const htmlElement = document.documentElement;
// console.log(htmlElement);

// const headElement = document.head;
// console.log(headElement);

// const bodyElement = document.body;
// console.log(bodyElement);

// const firstChildBody = bodyElement.firstElementChild;
// const lastChildBody = bodyElement.lastElementChild;
// console.log(firstChildBody);
// console.log(lastChildBody);

// const childNodesBody = bodyElement.children;
// console.log(childNodesBody);

// for (let i = 0; i <= childNodesBody.length; ++i) {
//     console.log(childNodesBody[i]);
// }

// const bodyElement = document.body;
// console.log(bodyElement);
// const previousSibling = bodyElement.previousElementSibling;
// console.log(previousSibling);

// const headElement = document.head;
// const nextSibling = headElement.nextElementSibling;
// console.log(nextSibling);

// const liElement = document.querySelector("li");
// console.log(liElement);
// const liElements = document.querySelectorAll("li");
// console.log(liElements);

// if (liElement) {
//     console.log("працюємо");
// }
// if (liElements.length) {
//     liElements.forEach((item, index) => {
//         console.log(item, index);
//     });
// }

// const block = document.querySelector(".block");
// console.log(block);

// const blocks = document.querySelectorAll(".block");
// console.log(blocks);

// if (blocks.length) {
//     console.log("є");
// }

// const liElements = document.querySelectorAll(".list__item.active");
// console.log(liElements);

// const liElements = document.querySelectorAll('[class*="__item"]');
// console.log(liElements);

// const someElement = document.querySelector("#some-id");
// console.log(someElement);

// const someElement = document.querySelector(".list");
// const parentElement = someElement.parentElement;
// console.log(parentElement);

// const someElement = document.querySelector("#some-id");
// const parentElement = someElement.closest(".list");
// console.log(parentElement);

// const liElement = document.querySelector(".list__item");
// const isClosest = liElement.closest(".list__item");
// console.log(isClosest);

// const listItems = document.querySelectorAll(".list__item");
// listItems.forEach((listItem) => {
//     listItem.innerHTML = "<a>link</a>";
// });

// const bodyElement = document.body;
// console.log(bodyElement);
// const htmlBody = bodyElement.innerHTML;
// console.log(htmlBody);

// const listItems = document.querySelectorAll(".list__item");
// listItems.forEach((listItem) => {
//     listItem.innerText = "<a>link</a>";
// });

// let newObject = document.createElement("div");
// console.log(newObject);
// newObject.innerHTML = "<span>norm</span> <div> I am block</div>";
// const main = document.querySelector("main");
// main.before(newObject);
// main.after(newObject);
// main.prepend(newObject);
// main.append(newObject);

// const main = document.querySelector("main");
// main.insertAdjacentHTML(
//     "afterbegin",
//     `<div><ul><li><a>Linl</a></li><li><a>Linl</a></li><li><a>Linl</a></li><li><a>Linl</a></li><li><a>Linl</a></li></ul></div>`
// );
// let text = ` <div> <a>Link</a>     </div> `;
// main.insertAdjacentText("afterbegin", text);

// const list = document.querySelector(".list");

// let someID = document.querySelector("#some-id");

// list.insertAdjacentElement("beforeend", someID);

// const wrapper = document.querySelector(".wrapper");
// const cloneWrapper = wrapper.cloneNode(true);
// console.log(cloneWrapper);
// wrapper.insertAdjacentElement("afterend", cloneWrapper);

// const list = document.querySelector(".list");
// list.className = "some-class";

// const list = document.querySelector(".list");
//  list.classList.add("list-red");
//  list.classList.remove("list-red");
// list.classList.toggle("list-red");
// list.classList.contains("list-red");
// if (list.classList.contains("list-red")) {
//     console.log("Клас list-red Є!");
// }

// const list = document.querySelector(".list");
// let newPadding = 10 + 15;
// list.style.padding = `${newPadding}px`;

// list.style.cssText = `
// 	padding: ${newPadding}px;
// 	width: 400px;
// 	border: 1px solid red;
// `;
// list.style.paddingBottom = `40px`;

// const list = document.querySelector(".list");
// const listStyle = getComputedStyle(list);
// console.log(listStyle);

// const listFontSize = parseFloat(listStyle.fontSize);
// console.log(listFontSize);
// if (listFontSize > 50) {
//     list.style.fontSize = "50px	";
// }

// // const list = document.querySelector(".list");
// //Перевіряємо наявність атрибута.
// list.hasAttribute("name");
// //Получаємо значення атрибута.
// list.getAttribute("name");
// //Установлюємо значення атрибута.
// list.setAttribute("name", "value");
// //Удаляємо атрибут.
// list.removeAttribute("name");

// let speed = parseFloat(list.dataset.speedAnimation);
// console.log(typeof speed);
// console.log(speed);
// let newSpeed = speed + 1000;
// console.log(newSpeed);

// list.dataset.speedAnimation = 5000;

// if (list.hasAttribute("data-speed-animation")) {
//     console.log("є");
// }

// const list = document.querySelector(".list");
// console.log(list.tagName);

// list.hidden = true;

// Hometask

// function createList(amount = 5) {
//     const createUl = document.createElement("ul");
//     for (let i = 1; i <= amount; ++i) {
//         const createLi = document.createElement("li");
//         createLi.innerHTML = `пункт списку  ${i}`;
//         createUl.appendChild(createLi);
//     }
//     bodyElement.insertAdjacentElement("afterbegin", createUl);
// }
// createList(10);
