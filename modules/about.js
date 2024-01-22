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

  enableBlobsFunctionality();

  return aboutWrapper;
}

function enableBlobsFunctionality() {
  //ändrar z-index till 0 när funktionen anropas, istället för -1 som är stilregeln i css:en
  const blobZIndex = document.querySelectorAll(".blob, .blobOverlay");
  blobZIndex.forEach((blobZIndex) => {
    blobZIndex.classList.add("aboutPageBlob");
  });

  const blobs = document.querySelectorAll(".blob");

  blobs.forEach((blob, index) => {
    blob.addEventListener("click", () => {
      if (window.location.hash !== "#about") return;

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

function disableBlobsFunctionality() {}
