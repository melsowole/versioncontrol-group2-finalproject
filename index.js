import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { aboutPage } from "./modules/about.js";
import { displayLanding } from "./modules/landing.js";
import { createPostHeader } from "./modules/postPage.js";
import { createNewPost } from "./modules/postPage.js";

displayLanding.then(() => {
  document
    .querySelector(".page-content")
    .append(createPostHeader(), createNewPost());
});

// Eventlistener for navbar

const chatBtn = document.querySelector("#chatBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");

contactBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  document.querySelector(".page-content").innerHTML = "";
  document.querySelector(".page-content").append(contactPage());
})

aboutBtn.addEventListener("click", (event)=>{
  event.preventDefault();
})

chatBtn.addEventListener("click", (event)=>{
  event.preventDefault();
})
