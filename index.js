import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { aboutPage } from "./modules/about.js";
import { displayLanding } from "./modules/landing.js";
import { createPostHeader } from "./modules/postPage.js";
import { createNewPost } from "./modules/postPage.js";
import { openContactPage, openAboutPage, openChatPage } from "./modules/navigation.js";

displayLanding.then(() => {
  document
    .querySelector(".page-content")
    .append(createPostHeader(), createNewPost());
});

// Eventlistener for navbar
const chatBtn = document.querySelector("#chatBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const contactBtn = document.querySelector("#contactBtn");

contactBtn.addEventListener("click", openContactPage);

aboutBtn.addEventListener("click", openAboutPage);

chatBtn.addEventListener("click", openChatPage);
