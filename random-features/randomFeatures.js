import { dom } from "../modules/dom.js";
import { title } from "./random-modules/anExample.js";

export function randomFeaturesPage() {
  const page = dom.create("main", "random-features-page");

  page.append(title());

  return page;
}
