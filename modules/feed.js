import { dom } from "./dom.js";
import { firebase } from "./firebase.js";
import { icons } from "./icons.js";

export function renderFeed() {
  const section = dom.create("section", "feed");

  firebase.GET().then((messages) => {
    for (const id in messages) {
      section.prepend(createPost(messages[id]));
    }
  });

  return section;
}

function createPost(message) {
  const post = dom.create("article", "post");

  const mood = dom.createAndAppend(post, "div", "post-mood");
  mood.innerHTML = icons(message.mood);

  //Angelica added timestamp end of author name, if timestamp exist
  const timestamp = message.timestamp? message.timestamp : '';
  const authorNameWithTime = timestamp? `${message.author} - ${timestamp.slice(11,16)}` : message.author;
  
  const author = dom.createAndAppend(post, "p", "post-author", authorNameWithTime);

  const content = dom.createAndAppend(
    post,
    "p",
    "post-content",
    message.content
  );
 
  return post;
}
