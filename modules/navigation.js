import { contactPage } from "./contact.js";
import { aboutPage } from "./about.js";
import { createPostHeader, createNewPost } from "./postPage.js";

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

// export function openContactPage(){
//     const pageContent = document.querySelector(".page-content");
//     pageContent.innerHTML = "";
//     pageContent.append(contactPage());
// }

// export function openAboutPage(){
//     const pageContent = document.querySelector(".page-content");
//     pageContent.innerHTML = "";
//     pageContent.append(aboutPage());
// }

// export function openChatPage(){
//     const pageContent = document.querySelector(".page-content");
//     pageContent.innerHTML = "";
//     pageContent.append(createPostHeader(), createNewPost());
// }
