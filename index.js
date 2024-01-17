import { dom } from "./modules/dom.js";
import { firebase } from "./modules/firebase.js";
import { contactPage } from "./modules/contact.js";
import { displayLanding } from "./modules/landing.js";

sessionStorage.clear();

displayLanding.then(() => {
  // main page content
  //   dom.createAndAppend(
  //     document.querySelector(".page-content"),
  //     "h2",
  //     "page",
  //     "This is the main page"
  //   );
});
