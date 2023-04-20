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

// for (let i = ingredients.length - 1; i >= 0; i--) {
//   const listItem = document.createElement("li");

//   listItem.textContent = ingredients[i];

//   listItem.classList.add("item");

//   ingredientsList.prepend(listItem);
// }
// console.log(ingredientsList);

ingredients.forEach((elem) => {
  const listItem = document.createElement("li");
  listItem.textContent = elem;
  listItem.classList.add("item");
  ingredientsList.append(listItem);
});
console.log(ingredientsList);
