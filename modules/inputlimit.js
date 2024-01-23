/*
Contribution: Limit input length and display number of remaining characters 
by Kristoffer Bengtsson (group 4)
*/


let characterCounter = 0;

// Limit the length of input into the specified textarea element to
// maxLength characters and display how many characters remain in a
// box below the textarea. The feedback box has an id of post-length-count
// and class of post-length-count sor styling.
function countInputInElement(targetElement, maxLength = 200, callbackFunc = null) {
    if ((targetElement !== undefined) && (targetElement !== null)) {
        let postLengthCounterBox = document.querySelector("#post-length-count");
        targetElement.setAttribute("maxlength", maxLength);

        // Create the element to show the counting in, if it does not already exist
        if ((postLengthCounterBox === undefined) || (postLengthCounterBox === null)) {
            postLengthCounterBox = document.createElement("div");
            postLengthCounterBox.id = 'post-length-count';
            postLengthCounterBox.classList.add('post-length-count');
            insertAfter(postLengthCounterBox, targetElement);
        }

        // Listen for changes in the textarea
        targetElement.addEventListener("input", (event) => {
            characterCounter = maxLength - event.currentTarget.value.length;
            postLengthCounterBox.innerHTML = `<span>Characters remaining:</span> <span>${characterCounter}</span>`;

            // If a callback function is set, call it when the text changes.
            if ((callbackFunc !== null) && (typeof callbackFunc == "function")) {
                callbackFunc(maxLength, characterCounter);
            }
        });
    }
}

// Support function to insert the counter below the textarea in the form
function insertAfter(newElement, currentElement) {
    currentElement.parentNode.insertBefore(newElement, currentElement.nextSibling);
}



export { countInputInElement }