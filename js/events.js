"use strict";
const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const modal = document.querySelector(". js-backdrop");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
