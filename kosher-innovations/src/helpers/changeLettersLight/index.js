// Change the navbar li to light letters for the dark backgrounds

export default function changeLettersLight() {
  const navItems = document.querySelectorAll("nav ul li");
  const mediaQuery = window.matchMedia("(max-width: 900px)");

  function updateNavColors() {
    if (mediaQuery.matches) {
      navItems.forEach((item) => {
        item.style.color = "var(--black)";
      });
    } else {
      navItems.forEach((item) => {
        item.style.color = "var(--white)";
      });
    }
  }

  updateNavColors();
  mediaQuery.addListener(updateNavColors);

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.color = "var(--black)";
    });

    item.addEventListener("mouseleave", () => {
      if (!mediaQuery.matches) {
        item.style.color = "var(--white)";
      }
    });
  });
}
