// Change the navbar li to dark letters for the light backgrounds

export default function changeLettersDark() {
  console.log("Changed letters to dark");
  const navItems = document.querySelectorAll("nav ul li");

  navItems.forEach((item) => {
    item.style.color = "var(--black)";

    item.addEventListener("mouseenter", () => {
      item.style.color = "var(--white)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.color = "var(--black)";
    });
  });
}
