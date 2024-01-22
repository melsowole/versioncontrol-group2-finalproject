import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";
import { renderFeed } from "./feed.js";

export function postPage() {
  const page = dom.create("section");

  const chatHeader = dom.createAndAppend(page, "header", "chatHeading", "Chat");
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

  const moods = ["happy", "turbulent", "sad", "mad"];

  moods.forEach((mood) => {
    const inputWrapper = dom.createAndAppend(chooseMoodDiv, "div");

    const radioInput = dom.createAndAppend(inputWrapper, "input");
    radioInput.name = "mood";
    radioInput.type = "radio";
    radioInput.value = mood;

    inputWrapper.innerHTML += icons(mood);
  });

  const writePostText = dom.createAndAppend(
    newPostDiv,
    "textarea",
    "newPostText"
  );

  writePostText.placeholder = "Whatcha doing?...";
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

    firebase.POST(message).then((r) => {
      location.reload();
    });
  });

  return newPostDiv;
}
