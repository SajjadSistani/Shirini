"use strict";

const data = {
  category: ["غذا", "نوشیدنی", "شیرینی"],
  food: [
    "کباب",
    "شیشلیک",
    "املت",
    "قرمه سبزی",
    "پیتزا",
    "سوخاری",
    "برگر",
    "ساندویج کثیف",
    "سیب زمینی",
  ],
  drink: [
    "آب شنگولی",
    "آب",
    "سن ایج",
    "مجتبی",
    "شیرپسته",
    "معجون",
    "شیرموز",
    "آب هویج",
    "شیک",
  ],
  pastry: [
    "باغلوا",
    "نون خامه ای",
    "کیک",
    "پشمک حاج عبدالله",
    "زبون",
    "ناپلئونی",
    "نخودی",
    "براونی",
    "بستنی",
  ],
};

//Select Category
const category = document.querySelector(".category-container");
const mainApp = document.querySelector(".main-container");

const init = () => {
  mainApp.style.display = "none";
  const randomsort = () => Math.random() - 0.5;
  data.food.sort(randomsort);
};

init();

category.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    category.style.display = "none";
    mainApp.style.display = "flex";
    if (e.target.textContent === "غذا") {
      const items = document.querySelectorAll(".main-container .item");
      items.forEach((el, i) => {
        el.textContent = data.food[i];
      });
    }
  }
});
