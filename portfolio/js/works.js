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

//hamburgur
let bars = document.querySelector(".clickable-bar");
let bar_one = document.querySelector(".bar-1");
let bar_two = document.querySelector(".bar-2");
let bar_three = document.querySelector(".bar-3");
bars.addEventListener("click", function () {
  if (bars.dataset.clicked === "0") {
    document.getElementsByClassName("frame")[0].classList.add("active");
    document.getElementsByClassName("menu-item")[0].classList.add("active");
    bar_two.style.visibility = "hidden";
    bar_one.style.transform = "rotate(-45deg)";
    bar_one.style.marginTop = "3vh";
    bar_three.style.transform = "rotate(45deg)";
    bar_three.style.marginTop = "-1.1vh";
    bars.dataset.clicked = "1";
  } else {
    document.getElementsByClassName("frame")[0].classList.remove("active");
    document.getElementsByClassName("menu-item")[0].classList.remove("active");
    bar_one.removeAttribute("style");
    bar_three.removeAttribute("style");
    bar_two.style.visibility = "visible";
    bars.dataset.clicked = "0";
  }
});
