import {posts, suggestUsers, users} from "./database.js"

function createNewpostAndSuggestions(user, suggestedUsers) {
  // SECTION_FOR_SET
  const sectionForSet = document.createElement("section");
  sectionForSet.classList.add("for-set")

  const box1 = document.createElement("div");
  box1.classList.add("box-1");

  const userImg = document.createElement("img");
  userImg.classList.add("imagens");
  userImg.src = user.img;
  userImg.alt = user.user;

  const userInfos = document.createElement("div");
  userInfos.classList.add("infos");

  const userName = document.createElement("h2");
  userName.classList.add("username");
  userName.innerText = user.user;

  const userProfession = document.createElement("p");
  userProfession.classList.add("profession");
  userProfession.innerText = user.stack;

  userInfos.append(userName, userProfession);
  box1.append(userImg, userInfos);

  const form = document.createElement("form");
  form.classList.add("inputs");

  const inputTitle = document.createElement("input");
  inputTitle.classList.add("input__uidesign");
  inputTitle.type = "text";
  inputTitle.placeholder = "Como criar uma interface simples e agradável utilizando boas práticas de design";
  inputTitle.name = "";
  inputTitle.id = "";
  inputTitle.cols = "30";
  inputTitle.rows = "10";

  const textArea = document.createElement("textarea");
  textArea.classList.add("input__uidesign");
  textArea.placeholder = "Hoje vamos conversar sobre como criar uma interface agradável mesmo sem ter um design pronto feito por um profissional de UI design. Antes de iniciar a criação de qualquer projeto, busque referência de aplicações...";
  textArea.name = "";
  textArea.id = "";
  textArea.cols = "30";
  textArea.rows = "10";

  const postButton = document.createElement("button");
  postButton.classList.add("botao-postar");
  postButton.innerText = "Postar";

  form.append(inputTitle, textArea, postButton);
  sectionForSet.append(box1, form);

  // SECTION_FOLLOW_SUGGESTIONS
  const sectionFollowSuggestions = document.createElement("section");
  sectionFollowSuggestions.classList.add("follow-sugestions")

  const titleFollowSuggestions = document.createElement("h2");
  titleFollowSuggestions.innerText = "Sugestões para seguir";

  const ulFollowSuggestions = document.createElement("ul");
  ulFollowSuggestions.classList.add("ul__aside");

  for (const suggestedUser of suggestedUsers) {
    ulFollowSuggestions.appendChild(createSuggestionElement(suggestedUser));
  }

  sectionFollowSuggestions.append(titleFollowSuggestions, ulFollowSuggestions);

  // SECTION_POST_ALL
  const sectionPostAll = document.createElement("section");
  sectionPostAll.classList.add("post-all");
  sectionPostAll.append(sectionForSet, sectionFollowSuggestions);

  return sectionPostAll;
}

function createSuggestionElement(suggestedUser) {
  const li = document.createElement("li");

  const userDiv = document.createElement("div");
  userDiv.classList.add("box-1");

  const userImg = document.createElement("img");
  userImg.classList.add("imagens")
  userImg.src = suggestedUser.img;
  userImg.alt = suggestedUser.user;

  const userInfo = document.createElement("div");
  userInfo.classList.add("infos");

  const userName = document.createElement("h2");
  userName.classList.add("username");
  userName.innerText = suggestedUser.user;

  const userProfession = document.createElement("p");
  userProfession.classList.add("profession")
  userProfession.innerText = suggestedUser.stack;

  userInfo.append(userName, userProfession);

  const followButton = document.createElement("button");
  followButton.classList.add("botao-seguir");
  followButton.innerText = "Seguir";

  userDiv.append(userImg, userInfo, followButton);
  li.appendChild(userDiv);

  return li;
}

function createPostElement(post) {
  const article = document.createElement("article");

  const userDiv = document.createElement("div");
  userDiv.classList.add("box-1");
  
  const userImg = document.createElement("img");
  userImg.classList.add("imagens");
  userImg.src = post.img;
  userImg.alt = post.user;
  
  const userInfo = document.createElement("div");
  
  const userName = document.createElement("h2");
  userName.classList.add("username");
  userName.innerText = post.user;
  
  const userProfession = document.createElement("p");
  userProfession.classList.add("profession");
  userProfession.innerText = post.stack;

  userInfo.append(userName, userProfession);
  userDiv.append(userImg, userInfo);
  
  const postTitle = document.createElement("h2");
  postTitle.classList.add("title__user700");
  postTitle.innerText = post.title;

  const postText = document.createElement("p");
  postText.classList.add("title__user400");
  postText.innerText = post.text;

  const likesDiv = document.createElement("div");
  likesDiv.classList.add("likes-pagina");

  const openPostBtn = document.createElement("button");
  openPostBtn.classList.add("botao-abrir-post");
  openPostBtn.innerText = "Abrir Post";

  const likeImg = document.createElement("img");
  likeImg.src = "assets/img/gray-heart.svg";
  likeImg.alt = "Empty Heart (Post not liked)";

  const likeButton = document.createElement("button");
  likeButton.addEventListener("click", () => {
    toggleLikeButtonImage(likeImg);
  })
  likeButton.classList.add("like-button");

  likeButton.appendChild(likeImg);

  const likeCount = document.createElement("small");
  likeCount.classList.add("contagem");
  likeCount.innerText = post.likes;
  
  likesDiv.append(openPostBtn, likeButton, likeCount);
  article.append(userDiv, postTitle, postText, likesDiv);

  return article;
}

function toggleLikeButtonImage(likeImg) {
  if (likeImg.src.includes("gray-heart.svg")) {
    likeImg.src = "assets/img/red-heart.svg";
    likeImg.alt = "Red Heart (Liked)";
  } else {
    likeImg.src = "assets/img/gray-heart.svg";
    likeImg.alt = "Empty Heart (Post not liked)";
  }
}

function createUserPostsElement(posts) {
  const containerPostsSection = document.createElement("section");
  containerPostsSection.classList.add("container__posts");

  const title = document.createElement("h2");
  title.innerText = "Posts";

  containerPostsSection.appendChild(title);

  for (const post of posts) {
    containerPostsSection.appendChild(createPostElement(post));
  }

  return containerPostsSection;
}

function renderPage(users, posts, suggestions) {
  const main = document.querySelector("main");
  main.classList.add("conteudo-principal");
  main.appendChild(createNewpostAndSuggestions(users[0], suggestions));
  main.appendChild(createUserPostsElement(posts)); 
}

renderPage(users, posts, suggestUsers);
