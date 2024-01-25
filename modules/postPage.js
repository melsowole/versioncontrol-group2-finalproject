import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";
import { renderFeed } from "./feed.js";

// Stoffe: Added this module
import { countInputInElement } from "./inputlimit.js";

let mute = false;

let isPopupOpen = false;

export function postPage() {
  const page = dom.create("section");

  dom.createAndAppend(page, "h2", "chat-h2", "Chat");

  const chatHeader = dom.createAndAppend(page, "header", "chatHeading");
  const newPostButton = dom.createAndAppend(
    chatHeader,
    "button",
    "newPostBtn",
    "+"
  );

  newPostButton.addEventListener("click", () => {
    if (!isPopupOpen) {
      isPopupOpen = true;
      document.body.append(createNewPost());
    }
  });

  page.append(renderFeed());

  return page;
}

let isCreateNewPostOpen = false;

const btn = document.querySelector("#muteBtn");
btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (mute) {
    mute = false;
    btn.className = "fa-regular fa-bell";
  } else {
    btn.className = "fa-regular fa-bell-slash";
    mute = true;
  }
});

function createNewPost() {
  const newPostDiv = dom.create("section", "newPostDiv");

  isCreateNewPostOpen = true;


  const closeButton = dom.createAndAppend(
    newPostDiv,
    "button",
    "closePostBtn",
    "X"
  );

  const titleDiv = dom.createAndAppend(newPostDiv, "input", "newPostTitle");
  titleDiv.placeholder = "Write your title here...";

  const text = dom.createAndAppend(
    newPostDiv,
    "p",
    "moodText",
    "Choose your mood:"
  );
  const chooseMoodDiv = dom.createAndAppend(newPostDiv, "div", "chooseMood");


  const moodIcons = ["sad", "turbulent", "happy", "mad"];
  const savedMood = localStorage.getItem("selectedMood") || "happy";
  chooseMoodDiv.innerHTML = moodIcons
    .map((mood) => {
      const iconSvg = icons(mood);
      const isChecked = mood === savedMood ? "checked" : "";

      return `<div class="moodIcon">
                <input type="radio" name="mood" value="${mood}" id="${mood}Radio">
                <label for="${mood}Radio">${iconSvg}</label>
              </div>`;
    })
    .join("");

  const moodIconsElements = newPostDiv.querySelectorAll(".moodIcon");

  moodIconsElements.forEach((iconElement) => {
    iconElement.addEventListener("click", () => {
      moodIconsElements.forEach((element) => {
        element.classList.remove("selected");
      });
      iconElement.classList.add("selected");
      const selectedMood = iconElement.querySelector("input").value;
      localStorage.setItem("selectedMood", selectedMood);
    });
  });

  const writePostText = dom.createAndAppend(
    newPostDiv,
    "textarea",
    "newPostText"
  );

  // stoffe start: Added character counter for textarea (see textlimit.js), 150 = character limit
  countInputInElement(writePostText, 150, (maxLength, charactersLeft) => {
    if (charactersLeft <= 0) {
      alert(`Your message may only contain up to ${maxLength} characters!`);
    }
  });
  // stoffe end

  const happyIcon = moodIconsElements[2];
  happyIcon.classList.add("selected");


  writePostText.placeholder = "Whatcha doing?...";
  const postBtn = dom.createAndAppend(newPostDiv, "button", "PostBtn", "Post");


  closeButton.addEventListener("click", () => {
    newPostDiv.remove();
    isCreateNewPostOpen = false;
    isPopupOpen = false;

  });


  postBtn.addEventListener("click", () => {
    //Angelica added timestamp to database 
    const message = {
      author: titleDiv.value,
      content: fixText (writePostText.value),
      mood: document.querySelector("input[type=radio]:checked").value,
      timestamp: new Date()
    };

    // Added a feature that triggers a audio when the user clicks on "Post."
    // The 'submitSound' event listener waits for the audio to complete before reloading the page.
    firebase.POST(message).then(() => {
      const submitSound = new Audio('./audio/post-sound.mp3');


      if (isClicked) {
        submitSound.muted = true;
      }

      submitSound.play();

      submitSound.addEventListener('ended', () => {
        location.reload();
        isPopupOpen = false;
      });
    });
  });


  return newPostDiv;
}


function fixText(str) {
  if (str.endsWith("!") || str.endsWith("?") || str.endsWith(".")) {
      return capitalizeFirstLetter(str);
  }
 
  return capitalizeFirstLetter(str) + '.';
 }
 
 
 function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
 }
 

function closeCreateNewPost () {

  const newPostDiv = document.querySelector('.newPostDiv');

  if (newPostDiv) {
    newPostDiv.remove();
    isCreateNewPostOpen = false;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('i')) {
    if (isCreateNewPostOpen) {
      closeCreateNewPost();
    }
  }
});


