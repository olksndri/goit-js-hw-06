// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список
// ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((elem) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = elem;
  return listItem;
});

ingredientsList.append(...list);
console.log(ingredientsList);

//! PREVIOUS VERSION
// ingredients.forEach((elem) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = elem;
//   listItem.classList.add("item");
//   console.log(listItem);
//   list.push(listItem);
// });
// console.log(list);
