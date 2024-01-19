export function blobsPage() {
    //ändrar z-index till 0 när funktionen anropas, istället för -1 som är stilregeln i css:en
    const blobZIndex = document.querySelectorAll('.blob, .blobOverlay');
    blobZIndex.forEach((blobZIndex) => {
      // blobZIndex.style.zIndex = '0';

      // Ändrar z-index genom css så att den kan skrivas över,
      // eftersom inline css  har högst prio
      blobZIndex.classList.add("aboutPageBlob");
    });

    //stilregler för hur blobsen ska se ut när de klickas
    //här ligger även z-index på 1, detta kan vara något som behövs kollas över
    const blobs = document.querySelectorAll(".blob");
    blobs.forEach((blob, index) => {
      //toggle-funktion som ändrar utseende på en blob när man klickar på den
      //när den klickas igen återgår bloben till standard utseende
      blob.addEventListener("click", () => {
        const blobClickedClass = "blobClicked" + (index + 1);

        if (blob.classList.contains(blobClickedClass)) {
          blob.classList.remove(blobClickedClass);
          // lagt till denna klass i blobsAdditional.css
          // du kan flytta över den i blobs.css
          // ville bara inte skapa konflik
          blob.classList.remove("clickedBlob");
        } else {
          blob.classList.add(blobClickedClass);
          blob.classList.add("clickedBlob");
        }

        //om texten i blobsen är osynlig, visas den, och är den synlig göms den
        const blobText = blob.querySelectorAll(".blobText");
        blobText.forEach((element) => {
          element.style.display =
            element.style.display === "flex" ? "none" : "flex";
        });

        //texten i de andra blobsen göms när man klickar på den aktuella bloben
        document.querySelectorAll(".blob").forEach((otherBlob) => {
          if (otherBlob !== blob) {
            otherBlob.querySelectorAll(".blobText").forEach((text) => {
              text.style.display = "none";
            });
          }
        });
      });
    });
}
