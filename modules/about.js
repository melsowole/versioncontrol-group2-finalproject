import { dom } from "./dom.js";

export function aboutPage() {
  const aboutWrapper = dom.create("section", "aboutSection");
  const aboutH1El = dom.createAndAppend(aboutWrapper, "h1", "aboutH1", "About");
  const aboutDivEl = dom.createAndAppend(aboutWrapper, "div", "aboutDiv");
  const aboutH2El = dom.createAndAppend(
    aboutDivEl,
    "h2",
    "aboutH2",
    "Catch blobs to find out"
  );

  blobsFunctionality();

  return aboutWrapper;
}

function blobsFunctionality() {
  const blobs = document.querySelectorAll(".blob");

  blobs.forEach((blob, index) => {
    blob.addEventListener("click", () => {
      if (!document.body.classList.contains("about-page")) return;

      const previouslyClicked = document.querySelector(".clickedBlob");

      if (previouslyClicked) {
        previouslyClicked.classList.remove("clickedBlob");
        previouslyClicked.querySelector(".blobText").style.display = "none";
        return;
      }

      blob.classList.add("clickedBlob");
      blob.querySelector(".blobText").style.display = "flex";
    });
  });
}
