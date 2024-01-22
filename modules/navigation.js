import { contactPage } from "./contact.js";
import { aboutPage } from "./about.js";
import { createPostHeader, createNewPost } from "./postPage.js";
import { randomFeaturesPage } from "../random-features/randomFeatures.js";

function openPage(content) {
  const pageContent = document.querySelector(".page-content");
  pageContent.innerHTML = "";
  pageContent.append(content);
}

export function openContactPage() {
  window.location.hash = "contact";

  openPage(contactPage());
}

export function openAboutPage() {
  window.location.hash = "about";

  openPage(aboutPage());
}

export function openChatPage() {
  window.location.hash = "home";

  openPage(createPostHeader(), createNewPost());
}

export function openRandomFeaturesPage() {
  window.location.hash = "random-features";

  openPage(randomFeaturesPage());
}