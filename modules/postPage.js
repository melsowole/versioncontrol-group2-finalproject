import { dom } from "./dom.js";
import { firebase } from "./firebase.js";

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
  const titleDiv = dom.createAndAppend(newPostDiv, "input", "newPostTitle");

  const text = dom.createAndAppend(
    newPostDiv,
    "p",
    "moodText",
    "Choose your mood:"
  );
  const chooseMoodDiv = dom.createAndAppend(
    newPostDiv,
    "div",
    "chooseMood",
    " different moods"
  );
  const writePostText = dom.createAndAppend(newPostDiv, "input", "newPostText");
  const PostBtn = dom.createAndAppend(newPostDiv, "button", "PostBtn", "Post");

  return newPostDiv;
}

// newPostButton.addEventlistener("click", (event) => {
//   event.preventDefault();
// });
