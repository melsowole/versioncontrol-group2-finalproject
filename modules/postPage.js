import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";

// function renderPostPage() {
//   dom.create("section", ".PostPageSection");
// }

// document.body.append(createPostHeader());
// document.body.append(createNewPost());

export function createPostHeader() {
  const chatHeader = dom.create("header", "chatHeading", "Chat");
  const newPostButton = dom.createAndAppend(
    chatHeader,
    "button",
    "newPostBtn",
    "Add new post"
  );

  return chatHeader;
}

export function createNewPost() {
  const newPostDiv = dom.create("section", "newPostDiv");
  let closeButton = document.querySelector("#closeNewPostPopUp");
  //   closeButton.dom.create("button");
  newPostDiv.append(closeButton);

  //   closeButton = dom.createAndAppend(newPostDiv, "button");

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


  // const moodButtons = [
  //   icons("sad"),
  //   icons("turbulent"),
  //   icons("happy"),
  //   icons("mad"),
  // ];

  // chooseMoodDiv.innerHTML = moodButtons
  //   .map((mood) => `<div><input type="radio" name="mood" value="${mood}</div>`)
  //   .join("");
  //   <label for="${mood}">${mood}</label> id="${mood}

  //   const sadMoodIcon = dom.createAndAppend(chooseMoodDiv, "input");
  //   sadMoodIcon.setAttribute("type", "radio");

  //   const turbulentMoodIcon = dom.createAndAppend(chooseMoodDiv, "input");
  //   turbulentMoodIcon.setAttribute("type", "radio");

  //   const happyMoodIcon = dom.createAndAppend(chooseMoodDiv, "input");
  //   happyMoodIcon.setAttribute("type", "radio");

  //   const madMoodIcon = dom.createAndAppend(chooseMoodDiv, "input");
  //   madMoodIcon.setAttribute("type", "radio");

  const writePostText = dom.createAndAppend(
    newPostDiv,
    "textarea",
    "newPostText"
  );
  writePostText.placeholder = "Whatcha doing?...";
  const PostBtn = dom.createAndAppend(newPostDiv, "button", "PostBtn", "Post");

    const happyIcon = moodIconsElements[2];
    happyIcon.classList.add("selected");

  return newPostDiv;
}

// newPostButton.addEventlistener("click", (event) => {
//   event.preventDefault();
// });
