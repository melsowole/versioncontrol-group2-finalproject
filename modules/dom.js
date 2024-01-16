export const dom = {
  create,
  createAndAppend,
};

function create(tagName, classes, textContent) {
  if (!tagName) {
    throw "ERROR: The 'tagName' parameter in dom.create() is missing";
  }

  const element = document.createElement(tagName);

  if (classes) {
    if (typeof classes === "string") {
      classes = [classes];
    }

    classes.forEach((cls) => element.classList.add(cls));
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function createAndAppend(parent, tagName, classes, textContent) {
  if (!(parent instanceof HTMLElement)) {
    throw "ERROR: The 'parent' argument in dom.createAndAppend() must be a valid DOM element.";
  }

  if (!tagName) {
    throw "ERROR: The 'tagName' argument in dom.createAndAppend() must be a valid HTML tag name.";
  }

  const element = create(tagName, classes, textContent);

  parent.append(element);

  return element;
}
