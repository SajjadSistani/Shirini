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
    "حاج عبدالله",
    "زبون",
    "ناپلئونی",
    "نخودی",
    "براونی",
    "بستنی",
  ],
};

//Eelements
const category = document.querySelector(".category-container");
const mainApp = document.querySelector(".main-container");

//Functions
const init = () => {
  mainApp.style.display = "none";
  const randomsort = () => Math.random() - 0.5;
  data.food.sort(randomsort);
  data.drink.sort(randomsort);
  data.pastry.sort(randomsort);
};

const updateItemsByCategory = (categoryData) => {
  const items = document.querySelectorAll(".main-container .item");
  items.forEach((el, i) => {
    el.textContent = categoryData[i];
  });
};

//Calling Functions
init();

//Events
category.addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    category.style.display = "none";
    mainApp.style.display = "flex";
    if (e.target.textContent === "غذا") {
      updateItemsByCategory(data.food);
    }
    if (e.target.textContent === "نوشیدنی") {
      updateItemsByCategory(data.drink);
    }
    if (e.target.textContent === "شیرینی") {
      updateItemsByCategory(data.pastry);
    }
  }
});

const handleClick = (e) => {
  if (e.target.classList.contains("item")) {
    e.target.classList.remove("item-covered");
    const otherElements = document.querySelectorAll(".main-container .item");
    Array.from(otherElements)
      .filter((el) => el !== e.target)
      .forEach((el) => el.classList.add("item-blured"));
    mainApp.removeEventListener("click", handleClick);
  }
};
mainApp.addEventListener("click", handleClick);
