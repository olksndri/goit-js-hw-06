// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде
// і виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод
// forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення:
// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll("#categories > li.item");
const numberOfCategories = categories.length;
console.log("  Number of categories: " + numberOfCategories);
categories.forEach((elem) => {
  console.log(`  Category: ${elem.firstElementChild.textContent}
  Elements: ${elem.lastElementChild.children.length}`);
  //! Також можна: console.log(`  Category: ${elem.lastElementChild.previousElementSibling.textContent}
  //! Також можна:  Elements: ${elem.firstElementChild.nextElementSibling.children.length}`);
  //! Et cetera, und so weiter, тощо...
});

//! PREVIOUS VERSION
//? const categories = document.querySelector("#categories").children;
//? const numberOfCategories = categories.length;
//? console.log("  Number of categories: " + numberOfCategories);
//? const categoriesArray = Array.from(categories);
//? categoriesArray.forEach((elem) => {
//?   console.log(`  Category: ${elem.querySelector("h2").textContent}
//?   Elements: ${elem.querySelector("ul").children.length}`);
//? });
