import { dom } from "./dom.js";
import { firebase } from "./firebase.js";

// function renderPostPage() {
//   dom.create("section", ".PostPageSection");
// }

document.body.append(createPostHeader());

function createPostHeader() {
  const chatHeader = dom.create("header", "chatHeading", "Chat");
  const newPostButton = dom.createAndAppend(
    chatHeader,
    "button",
    "newPost",
    "Add new post"
  );

  return chatHeader;
}

// newPostButton.addEventlistener("click", (event) => {
//   event.preventDefault();
// });
