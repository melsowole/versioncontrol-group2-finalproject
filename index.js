import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { displayLanding } from "./modules/landing.js";

sessionStorage.clear();

displayLanding.then(() => {
  document.querySelector(".page-content").append(contactPage());
});


