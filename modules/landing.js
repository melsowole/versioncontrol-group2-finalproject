import { dom } from "./dom.js";

const pageContainer = document.querySelector(".page-content");

export const displayLanding = new Promise((resolve, reject) => {
  let landing;
  let fadeTime = 0;
  let displayTime = 0;

  if (!sessionStorage.getItem("refresh")) {
    sessionStorage.setItem("refresh", true);

    landing = landingPage();

    fadeTime = 1000;
    displayTime = 2000;

    pageContainer.append(landing);

    console.log("appended landing");
  }

  setTimeout(() => {
    pageContainer.classList.add("fade-out");

    setTimeout(() => {
      if (landing) {
        // landing.remove();
      }

      pageContainer.classList.remove("fade-out");

      resolve();
    }, fadeTime);
  }, displayTime);
});

function landingPage() {
  const landingWrapper = dom.create("section", "landing-wrapper");

  dom.createAndAppend(landingWrapper, "h1", "logo", "WYD");

  const sloganWrapper = dom.createAndAppend(landingWrapper, "p", "slogan");

  dom.createAndAppend(sloganWrapper, "span", "", "Watcha");
  dom.createAndAppend(sloganWrapper, "span", "", "doin?");

  return landingWrapper;
}
