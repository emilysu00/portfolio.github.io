//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");

  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {
    console.log("Scrolling");
    var scrollPosition = scrollContainer.scrollTop;
    var fixedDetail = document.getElementById("detail");
    var secondSection = document.querySelector(".second-section");

    // start scrolling
    if (
      scrollPosition >= secondSection.offsetTop - 0.35 * window.innerHeight &&
      scrollPosition <= secondSection.offsetTop + 1.9 * window.innerHeight
    ) {
      console.log("first");
      fixedDetail.style.marginTop = "0vh";
      fixedDetail.style.position = "fixed";
    }
    // stop scrolling
    else if (
      scrollPosition >
      secondSection.offsetTop + 1.9 * window.innerHeight
    ) {
      console.log(scrollPosition - 0.8 * window.innerHeight);
      var marginTopValue = scrollPosition - 0.8 * window.innerHeight;
      fixedDetail.style.position = "absolute";
      fixedDetail.style.marginTop = "190vh";
    }
    // before scrolling
    else if (
      scrollPosition <
      secondSection.offsetTop - 0.35 * window.innerHeight
    ) {
      console.log("third");
      fixedDetail.style.position = "sticky";
    }
    console.log(scrollPosition);
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
