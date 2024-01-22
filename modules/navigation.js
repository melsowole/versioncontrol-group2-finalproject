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
  openPage(contactPage());
}

export function openAboutPage() {
  openPage(aboutPage());
}

export function openChatPage() {
  openPage(createPostHeader(), createNewPost());
}

export function openRandomFeaturesPage() {
  openPage(randomFeaturesPage());
}