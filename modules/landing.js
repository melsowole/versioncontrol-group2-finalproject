import { dom } from "./dom.js";

const pageContainer = document.querySelector(".page-content");

export const displayLanding = new Promise((resolve, reject) => {
  if (sessionStorage.getItem("refresh")) {
    return resolve();
  }

  const muteButton = document.querySelector('#muteBtn');
  muteButton.style.display = 'none';

  sessionStorage.setItem("refresh", true);

  const landing = landingPage();
  pageContainer.append(landing);

  document.querySelector("nav").classList.add("no-click");

  const fadeTime = 1000;
  const displayTime = 2000;

  setTimeout(() => {
    pageContainer.classList.add("fade-out");

    setTimeout(() => {
      landing.remove();

      document.querySelector("h1").classList.add("hide-on-mobile");
      document.querySelector("nav").classList.remove("no-click");

      pageContainer.classList.remove("fade-out");

      resolve();
    }, fadeTime);
  }, displayTime);
});

function landingPage() {
  const landingWrapper = dom.create("section", "landing-wrapper");

  const sloganWrapper = dom.createAndAppend(landingWrapper, "p", "slogan");

  dom.createAndAppend(sloganWrapper, "span", "", "Watcha");
  dom.createAndAppend(sloganWrapper, "span", "", "doin?");

  return landingWrapper;
}
