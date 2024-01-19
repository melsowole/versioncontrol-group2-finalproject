import { dom } from './dom.js';
import { blobsPage } from "./blobs.js";

export function aboutPage() {
  const aboutWrapper = dom.create("section", "aboutSection");
  const aboutH1El = dom.createAndAppend(aboutWrapper, "h1", "aboutH1", "About");
  const aboutDivEl = dom.createAndAppend(aboutWrapper, "div", "aboutDiv");
  const aboutH2El = dom.createAndAppend(
    aboutDivEl,
    "h2",
    "aboutH2",
    "Catch blobs to find out"
  );

  blobsPage();

  return aboutWrapper;
}
