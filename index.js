import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { aboutPage } from "./modules/about.js";
import { displayLanding } from "./modules/landing.js";
import { createPostHeader } from "./modules/postPage.js";
import { createNewPost } from "./modules/postPage.js";
import { openContactPage, openAboutPage, openChatPage } from "./modules/navigation.js";
import { blobsPage } from "./modules/blobs.js";
// sessionStorage.clear();

const nav = [
  { id: "chatBtn", openPage: openChatPage },
  { id: "aboutBtn", openPage: openAboutPage },
  { id: "contactBtn", openPage: openContactPage },
];

displayLanding.then(() => {
  document.querySelector("header").classList.add("hide-on-mobile");
  document
    .querySelector(".page-content")
    .append(createPostHeader(), createNewPost());

  document.querySelector("nav").classList.remove("no-click");

  // Eventlistener for navbar
  nav.forEach((item) => {
    document.getElementById(item.id).addEventListener("click", item.openPage);
  });
});


