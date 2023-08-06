import { users, posts } from './database.js';

let showPost = document.querySelector(".botao-abrir-post")
let exemplo = document.addEventListener("DOMContentLoaded", function() {
let main = document.querySelector(".conteudo-principal");
console.log(main)
let searchButton = document.querySelector(".show__post");

function creatModal() {
  if (!document.querySelector(".modal__container")) {
    let dialog = document.createElement("dialog");
    dialog.classList.add("modal__container");
    main.appendChild(dialog);
  }
}

function showModal(number, value) {
    let dialog = document.querySelector(".modal__container");
    if (!dialog) {
      creatModal();
      dialog = document.querySelector(".modal__container");
    }

function creatShowModal() {
    let modal = document.querySelector(".modal__container");
    modal.showModal();
}
    
function closeModal() {
  let modal = document.querySelector(".modal__container");
  modal.close();
}

  dialog.innerHTML = `
    <div class="name__modal">
      <div class="auxImg__modal">
        <img class="img__modal" src="${value.img}" alt="Imagem">
      </div>
      <div class="nameUser__modal">
        <h3>${value.user}</h3>
        <small>${value.stack}</small>
      </div>
    </div>
    <div class="title__modal">
      <h2>${number.title}</h2>
      <span class="close__btn-modal">X</span>
    </div>
    <form>
      <label class="paragraph__modal">${number.text}</label>
    </form>
  `;

  let span = dialog.querySelector(".close__btn-modal");
  span.addEventListener("click", closeModal);
}

function renderizarModal(postId) {
  console.log(postId);
  for (let number of posts) {
    if (number.id_post == postId) {
      for (let value of users) {
        if (number.user == value.id) {
          showModal(number, value);
        }
      }
    }
  }
}

creatModal();
});
