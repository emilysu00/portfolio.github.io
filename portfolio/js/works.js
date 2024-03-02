//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const graphicElement = document.getElementById("graphic");
  const projectElement = document.getElementById("project");

  graphicElement.style.transition = "transform 0.5s ease";
  projectElement.style.transition = "transform 0.5s ease";

  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {
    console.log("scrolling");
    scrollContainer.addEventListener("scroll", () => {
      let scrolled = scrollContainer.scrollTop;
      if (scrolled >= 1.6 * window.innerHeight) {
        graphicElement.style.transform =
          "translateY(" + 0.78 * window.innerHeight + "px)";
      } else {
        graphicElement.style.transform = "translateY(" + scrolled * 0.5 + "px)";
      }
    });
    scrollContainer.addEventListener("scroll", () => {
      let scrolled = scrollContainer.scrollTop;
      if (scrolled >= 1.5 * window.innerHeight) {
        projectElement.style.transform =
          "translateY(" + 0.06 * window.innerHeight + "px)";
      } else {
        projectElement.style.transform = "translateY(" + scrolled * 0.2 + "px)";
      }
    });
  });
});
