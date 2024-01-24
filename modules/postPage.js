import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";
import { renderFeed } from "./feed.js";

export function postPage() {
  const page = dom.create("section");

  const chatHeader = dom.createAndAppend(page, "h1", "chatHeading", "Chat");
  const newPostButton = dom.createAndAppend(
    chatHeader,
    "button",
    "newPostBtn",
    "+"
  );

  newPostButton.addEventListener("click", () => {
    document.body.append(createNewPost());
  });

  page.append(renderFeed());

  return page;
}

function createNewPost() {
  const newPostDiv = dom.create("section", "newPostDiv");
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

  const happyIcon = moodIconsElements[2];
  happyIcon.classList.add("selected");

  writePostText.placeholder = "Whatcha doing?...";
  //   if (writePostText === "") {
  //     alert("Please complete all required fields in the form before submitting");
  //     console.log("funkar");
  //     return false;
  //   }

  const postBtn = dom.createAndAppend(newPostDiv, "button", "PostBtn", "Post");

  closeButton.addEventListener("click", () => {
    newPostDiv.remove();
  });

  postBtn.addEventListener("click", () => {
    const message = {
      author: titleDiv.value,
      content: writePostText.value,
      mood: document.querySelector("input[type=radio]:checked").value,
    };

    if ((message == message.author) === "" || message.content === "") {
      alert(
        "Please complete all required fields in the form before submitting"
      );
      return false;
    }

    // Added a feature that triggers a audio when the user clicks on "Post."
    // The 'submitSound' event listener waits for the audio to complete before reloading the page.
    firebase.POST(message).then(() => {
      const submitSound = new Audio("./audio/post-sound.mp3");

      submitSound.play();

      submitSound.addEventListener("ended", () => {
        location.reload();
      });
    });
  });

  return newPostDiv;
}
