export function scrollFunc() {
  const toTheTop = document.getElementById("toTheTopArrow");

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTheTop.style.display = "grid";
  } else {
    toTheTop.style.display = "none";
  }
}

export function scrollToTop(event) {
  document.documentElement.scrollTop = 0;
  event.preventDefault();
}
