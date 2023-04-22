//! Напиши скрипт створення і очищення колекції елементів.
//* Користувач вводить кількість елементів в input і
//* натискає кнопку Створити, після чого рендериться колекція.
//* Натисненням на кнопку Очистити, колекція елементів очищається.
//* Створи функцію createBoxes(amount), яка приймає один
//* параметр - число. Функція створює стільки < div >,
//* скільки вказано в amount і додає їх у div#boxes.
//* Розміри найпершого <div> - 30px на 30px.
//* Кожен елемент після першого повинен бути ширшим і
//* вищим від попереднього на 10px.
//* Всі елементи повинні мати випадковий колір фону у форматі HEX.
//* Використовуй готову функцію getRandomHexColor для
//* отримання кольору.
//** Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//** у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create='']");
const destroyBtn = document.querySelector("[data-destroy='']");

let totalElements = [];
let amount = 0;
let input = document.querySelector("input");
input.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});
let step = Number(input.step);

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let i = 0;
  let counter = 30;
  for (i = 0; i < amount; i += step) {
    const element = document.createElement("div");

    element.style.backgroundColor = getRandomHexColor();
    element.style.height = `${counter}px`;
    element.style.width = `${counter}px`;

    counter += 10;
    totalElements.push(element);
  }
  boxes.append(...totalElements);
}

function destroyBoxes() {
  input.value = "";
  amount = 0;
  boxes.innerHTML = "";
  totalElements = [];
}
