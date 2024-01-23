import { dom } from "../../modules/dom.js";

export function title() {
  const title = dom.create(
    "h1",
    ["random-features-title", "another-classname"],
    "Random Features"
  );

  return title;
}
