// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let listItems = document.querySelectorAll(".page__works .content-works__item");

// Використовуємо forEach для ітерації кожного елемента списку
listItems.forEach((listItem, index) => {
  let number = document.createElement("span");
  // додаємо всередину цього елементу <span class="big">Привіт!</span>
  number.innerHTML = `${index + 1}`;
  // Додаємо всередину кожного list-item span в який передаємо індекс елемента
  listItem.prepend(number);
});
