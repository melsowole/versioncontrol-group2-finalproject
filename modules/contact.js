// contact
import { dom } from "./dom.js";

export function contactPage() {
  const contactWrapper = dom.create("section");

  const contactH1El = dom.createAndAppend(
    contactWrapper,
    "h1",
    "contactH1",
    "Contact"
  );

  const contactDivEl = dom.createAndAppend(contactWrapper, "div", "contactDiv");

  const contactH2El = dom.createAndAppend(contactDivEl, "h2", "contactH2");

  const span1 = dom.createAndAppend(contactH2El, "span", "", "You can catch ");
  const span2 = dom.createAndAppend(contactH2El, "span", "", "us at...");

  const divPEl = dom.createAndAppend(contactDivEl, "div");

  const contactMail = dom.createAndAppend(
    divPEl,
    "p",
    "",
    "WYD@gritacademy.se"
  );
  const contactPhone = dom.createAndAppend(
    divPEl,
    "p",
    "",
    "Mobile: 070-1234567"
  );

  return contactWrapper;
}
