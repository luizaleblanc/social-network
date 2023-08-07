import { users, posts } from "./database.js";

let showPost = document.querySelector(".botao-abrir-post");

function createModal() {
  let main = document.querySelector(".conteudo-principal");

  if (!document.querySelector(".modal__container")) {
    let dialog = document.createElement("dialog");
    dialog.classList.add("modal__container");
    main.appendChild(dialog);
  }
}

let exemplo = document.addEventListener("DOMContentLoaded", function () {
  
  let searchButton = document.querySelector(".show__post");
  createModal();
});

export function showModalWithData(post) {
  let dialog = document.querySelector(".modal__container");

  if (!dialog) {
    createModal();
    dialog = document.querySelector(".modal__container");
  }

  function closeModal() {
    let modal = document.querySelector(".modal__container");
    modal.close();
  }

  dialog.innerHTML = `
  <div class="name__modal">
    <div class="auxImg__modal">
      <img class="img__modal" src="${post.img}" alt="Imagem">
    </div>
    <div class="nameUser__modal">
      <h3>${post.user}</h3>
      <small>${post.stack}</small>
    </div>
  </div>
  <div class="title__modal">
    <h2>${post.title}</h2>
    <span class="close__btn-modal">X</span>
  </div>
  <form>
    <label class="paragraph__modal">${post.text}</label>
  </form>
`;

  let span = dialog.querySelector(".close__btn-modal");
  span.addEventListener("click", closeModal);

  dialog.showModal();
}

export function renderizarModal(postId) {
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