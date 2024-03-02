//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");

  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {
    console.log("Scrolling");
    var scrollPosition = scrollContainer.scrollTop;
    var fixedDetail = document.getElementById("detail");
    var secondSection = document.querySelector(".sixth-section");

    // start scrolling
    if (
      scrollPosition >= secondSection.offsetTop - 0.35 * window.innerHeight &&
      scrollPosition <= secondSection.offsetTop + 2.7 * window.innerHeight
    ) {
      console.log("first");
      fixedDetail.style.marginTop = "0vh";
      fixedDetail.style.position = "fixed";
    }
    // stop scrolling
    else if (
      scrollPosition >
      secondSection.offsetTop + 2.7 * window.innerHeight
    ) {
      console.log(scrollPosition - 0.8 * window.innerHeight);
      var marginTopValue = scrollPosition - 0.8 * window.innerHeight;
      fixedDetail.style.position = "absolute";
      fixedDetail.style.marginTop = "270vh";
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
