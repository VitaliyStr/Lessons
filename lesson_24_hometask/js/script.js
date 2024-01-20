"use strict";

// let result = 2 + (3 * 10) / +"5";
// console.log(result);

// let num = 5;
// let result = 2 + (3 * 10) / ++num;
// console.log(typeof result);
// console.log(result);

// let result = 7 <= 6;
// console.log(typeof result);
// console.log(result);

// let result = 5 == "5";
// console.log(result);
// console.log(typeof result);

// let result = 5 != "5";
// console.log(result);
// console.log(typeof result);

// let result = !"";
// console.log(result);
// console.log(typeof result);

// let result = 0 || 1;
// console.log(result);
// console.log(typeof result);
// console.log(Boolean(result));

// let result = 1 && 1;
// console.log(result);
// console.log(Boolean(result));

// let varOne = 20;
// let varTwo = 20;

// if (varOne > varTwo) {
//     let result = varOne - varTwo;
//     console.log(result);
// } else if (varOne < varTwo) {
//     let result = varOne + varTwo;
//     console.log(result);
// } else if ((varOne = varTwo)) {
//     let result = varOne / varTwo;
//     console.log(result);
// } else {
//     let result = varOne * varTwo;
//     console.log(result);
// }
// let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";
// console.log(someVar);

// if (10 < 5) {
//     let someVar = "10 більше 5";
//     console.log(someVar);
// } else {
//     let someVar = "10 менше 5";
//     console.log(someVar);
// }

// let someString = "Hello World 2024";
// console.log(`К-сть символів: ${someString.length}`);
// for (let i = 0; i < someString.length; ++i) {
//     console.log(someString[i]);
// }

// let someArray = ["вася", "Kate", "boris"];
// console.log(typeof someArray);
// console.log(someArray.length);

// let someArray = ["вася", "Kate", "boris"];
// console.log(someArray);
// console.log(someArray);
// console.log(someArray[1]);
// for (let i = 0; i < someArray.length; ++i) {
//     console.log(someArray[i]);
// }
// someArray.forEach((userName) => {
//     console.log(userName);
// });
// usersNames.forEach((userName) => {
//     console.log(userName);
// });

// someArray.forEach((userName, index) => {
//     console.log(index);
//     console.log(userName);
// });

// someArray.push("Joker");
// console.log(someArray);
// console.log(someArray.includes("Kate"));
// console.log(someArray);
// if (!someArray.includes(10)) {
//     someArray.push(10);
// }
// console.log(someArray);
// console.log(Array.isArray(someArray));
// if (Array.isArray(someArray)) {
//     console.log(someArray.push(10));
//     console.log(someArray);
// }

// let users = ["вася", "Kate", "boris"];
// let userNames = users.join("");
// console.log(userNames);

// let userNames = "";
// users.forEach((item, index) => {
//     userNames += item;
//     index !== users.length - 1 ? (userNames += ",") : null;
// });
// console.log(userNames);

// let arrTwo = [8, 22, 1];
// console.log(arrTwo.sort());
// function compareNumeric(a, b) {
//     console.log(`Порівнюємо ${a} і ${b}`);
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;

//     return a - b;
// }
// console.log(arrTwo.sort(compareNumeric));

// showMessage();
// function showMessage() {
//     console.log("text");
// }
// function showMessage(someText = "text description") {
//     console.log(someText);
// }

// function calcSum(a = 0, b = 0) {
//     const result = a + b;
//     showMessage(result);
// }
// function showMessage(someText = "Текст за замовченням") {
//     console.log(someText);
// }
// calcSum(10, 20);

// const numOne = 10;
// const numTwo = 20;

//  Функція суми двох чисел
// function calcSum(a, b) {
//     showSum(a + b);
// }
// function showSum(result) {
//     console.log(result);
// }
//  виклик функції
// calcSum(numOne, numTwo);

// виклик функції з іншими значенннями
// calcSum(10, 30);
// calcSum(0, 20);

// function someFunc(text = "Жека") {
//     console.log(text);
// }
// someFunc("vasrarsasdasdasd");

// return - повертає результат функції

// Функція суми двох чисел
// function calcSum(a = 0, b = 0) {
//     return a + b;
// }
// function showMessage(someText = "Текст за замовченням") {
//     console.log(someText);
// }
// showMessage(calcSum(10, 20));

// let result = calcSum(10, 20);
// showMessage(result);

// function calcMnoj(a = 0, b = 0) {
//     return a * b;
// }
// function showRez(text = "result") {
//     console.log(text);
// }
// showRez(calcMnoj(20, 2));
// let result = calcMnoj(20, 20);
// showRez(result);

/* спочатку змінна=0 і ми її збільшуємо на 1 */
let someVar = 0;
++someVar;

if (someVar) {
    console.log(someVar);
}
/* цикл буде йти з 1 до 10 */
for (let i = 1; i <= 10; ++i) {
    console.log(`Пункт №${i}`);
}

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
    console.log("000");
}
// if (false || (false && true) || false)
// if (false || false || false)
// if (false || false || false)
// if (false) - це означає що нічого не потрапить

/*  */
function calcDiv(a, b) {
    if (b === 0) {
        console.log("Error - Ділення на 0");
    } else {
        let result = a / b;
        if (isNaN(result)) {
            console.log(`помилка в даних обчислення не може бути виконано`);
        } else if (!isFinite(result)) {
            console.log(
                `помилка в даних-Незкінечність, друга ячейка пустий рядок `
            );
        } else {
            console.log(`результат ділення: ${result}`);
        }
    }
}

calcDiv(10, 20);
calcDiv(10, 0);
calcDiv(10, "");
calcDiv(10, "asdasd");

let items = ["Vasil", 20, 10, "Petro", 30];
console.log(items);

items.forEach((item, index) => {
    if (item === 10) {
        console.log(`Об'єкт № ${index} має значення 10`);
    }
});
