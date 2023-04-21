// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>

// JavaScript містить масив рядків:
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const list = [];

ingredients.forEach((elem) => {
  const listItem = document.createElement("li");

  listItem.textContent = elem;

  listItem.classList.add("item");

  // console.log(listItem);

  list.push(listItem);
});

// console.log(list);

ingredientsList.append(...list);

console.log(ingredientsList);
