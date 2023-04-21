// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок
// "Anonymous".

const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");
input.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
});
