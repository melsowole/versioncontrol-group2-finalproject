export function blobsPage() {
  //ändrar z-index till 0 när funktionen anropas, istället för -1 som är stilregeln i css:en
  const blobZIndex = document.querySelectorAll(".blob, .blobOverlay");
  blobZIndex.forEach((blobZIndex) => {
    blobZIndex.classList.add("aboutPageBlob");
  });

  const blobs = document.querySelectorAll(".blob");

  blobs.forEach((blob, index) => {
    blob.addEventListener("click", () => {
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

