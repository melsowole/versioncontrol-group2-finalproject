import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { displayLanding } from "./modules/landing.js";
import * as nav from "./modules/navigation.js";

const navItems = [
  { id: "chatBtn", openPage: nav.openChatPage },
  { id: "aboutBtn", openPage: nav.openAboutPage },
  { id: "contactBtn", openPage: nav.openContactPage },
  { id: "randomFeaturesBtn", openPage: nav.openRandomFeaturesPage },
];

displayLanding.then(() => {
  document.querySelector("header").classList.add("hide-on-mobile");
  nav.openChatPage();

  document.querySelector("nav").classList.remove("no-click");

  // Eventlistener for navbar
  navItems.forEach((item) => {
    document.getElementById(item.id).addEventListener("click", item.openPage);
  });
});
