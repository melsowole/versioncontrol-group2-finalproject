import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import {icons} from "./icons.js";

document.body.append(renderFeed());

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
