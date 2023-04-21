// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених
// символів.

// Яка кількість символів повинна бути в інпуті, зазначається
// в його атрибуті data - length. Якщо введена правильна кількість
// символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним. Для додавання стилів використовуй
// CSS - класи valid і invalid, які ми вже додали у вихідні файли
// завдання.

const input = document.querySelector("#validation-input");
// console.log(input);
input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  }
});
