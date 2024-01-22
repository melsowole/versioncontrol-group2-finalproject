import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";

// document.body.append(renderFeed());

export function renderFeed() {
  const section = dom.create("section", "feed");

  firebase.GET().then((messages) => {
    console.log(messages);
    for (const id in messages) {
      section.append(createPost(messages[id]));
    }
  });

  return section;
}

function createPost(message) {
  const post = dom.create("article", "post");

  const mood = dom.createAndAppend(post, "div", "post-mood");
  mood.innerHTML = icons(message.mood);

  const author = dom.createAndAppend(post, "p", "post-author", message.author);

  const content = dom.createAndAppend(
    post,
    "p",
    "post-content",
    message.content
  );

  return post;
}

// document.body.append(createPostHeader());
// document.body.append(createNewPost());

export function createPostHeader() {
  const chatHeader = dom.create("header", "chatHeading", "Chat");
  const newPostButton = dom.createAndAppend(
    chatHeader,
    "button",
    "newPostBtn",
    "+"
  );

  newPostButton.addEventListener("click", () => {
    console.log(createNewPost());
    createNewPost();
    document.body.append(createNewPost());
  });

  return chatHeader;
}

export function createNewPost() {
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

  const moodButtons = [
    icons("sad"),
    icons("turbulent"),
    icons("happy"),
    icons("mad"),
  ];

  chooseMoodDiv.innerHTML = moodButtons
    .map((mood) => `<div><input type="radio" name="mood" value="${mood}</div>`)
    .join("");
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

  closeButton.addEventListener("click", () => {
    console.log(createNewPost.remove());
    createNewPost.remove();
  });

  newPostDiv.addEventListener("click", () => {});

  return newPostDiv;
}
