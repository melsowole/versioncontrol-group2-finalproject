export function blobsPage() {
    //ändrar z-index till 0 när funktionen anropas, istället för -1 som är stilregeln i css:en
    const blobZIndex = document.querySelectorAll('.blob, .blobOverlay');
    blobZIndex.forEach(blobZIndex => {
        blobZIndex.style.zIndex = '0';
    });

    //stilregler för hur blobsen ska se ut när de klickas
    //här ligger även z-index på 1, detta kan vara något som behövs kollas över
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const blobStyle = [
            { width: '85vw', height: '85vw', top: '25%', left: '10%', zIndex: '1', fontSize: '5vw' },  
            { width: '85vw', height: '85vw', top: '25%', right: '10%', zIndex: '1', fontSize: '5vw' }, 
            { width: '85vw', height: '85vw', top: '25%', right: '10%', zIndex: '1', fontSize: '5vw' }, 
            { width: '85vw', height: '85vw', top: '25%', left: '10%', zIndex: '1', fontSize: '5vw' }
        ];

        //toggle-funktion som ändrar utseende på en blob när man klickar på den
        //när den klickas igen återgår bloben till standard utseende
        blob.addEventListener('click', () => {
            const blobClickedClass = 'blobClicked' + (index + 1);
            const currentStyle = blobStyle[index];

            if (blob.classList.contains(blobClickedClass)) {
                blob.classList.remove(blobClickedClass);

                blob.style.width = '';
                blob.style.height = '';
                blob.style.top = '';
                blob.style.right = '';
                blob.style.left = '';
                blob.style.zIndex = '';
                blob.style.fontSize = '';
            } else {
                blob.classList.add(blobClickedClass);

                blob.style.width = currentStyle.width;
                blob.style.height = currentStyle.height;
                blob.style.top = currentStyle.top;
                blob.style.right = currentStyle.right || '';
                blob.style.left = currentStyle.left || '';
                blob.style.zIndex = currentStyle.zIndex;
                blob.style.fontSize = currentStyle.fontSize;
            }

            //om texten i blobsen är osynlig, visas den, och är den synlig göms den
            const blobText = blob.querySelectorAll('.blobText');
            blobText.forEach(element => {
                element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
            })

            //texten i de andra blobsen göms när man klickar på den aktuella bloben
            document.querySelectorAll('.blob').forEach(otherBlob => {
                if (otherBlob !== blob) {
                    otherBlob.querySelectorAll('.blobText').forEach(text => {
                        text.style.display = 'none';
                    });
                }
            });
        });
    });
}
