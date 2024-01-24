// contact
import { dom } from "./dom.js";

export function contactPage() {
  const contactWrapper = dom.create("section");

  const contactH1El = dom.createAndAppend(
    contactWrapper,
    "h2",
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

  // Contribution Yasir grupp 1 start
  const form = dom.createAndAppend(
    contactDivEl,
    "form",
    "contactForm",
    ""

  );

  const contactFormH1 = dom.createAndAppend(
    form,
    "h3",
    "contactFormH3",
    "Send us a message"
  );

  const textArea = dom.createAndAppend(
    form,
    "textArea",
    "contactTextArea",
    ""
  );

  const button = dom.createAndAppend(
    form,
    "button",
    "contactButton",
    "send"
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Your message has been sent");
    form.reset();
  });

  // Contribution Yasir grupp 1 End

  return contactWrapper;
}
