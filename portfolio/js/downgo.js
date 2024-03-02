//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");

  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {
    scrollContainer.addEventListener("scroll", () => {
      var scrollPosition = scrollContainer.scrollTop;
      var fixedDetail = document.getElementById("pre1text");
      var fixedDetail2 = document.getElementById("pre2text");
      var fixedDetail3 = document.getElementById("moutaintext");
      var stickyimg = document.getElementById("pre1photo1");
      var stickyimg2 = document.getElementById("pre2photo1");
      var stickyimg3 = document.getElementById("moutainphoto1");
      var secondSection = document.querySelector(".third-section");

      // Scroll behavior for pre1text and pre1photo1
      if (
        scrollPosition >= secondSection.offsetTop + 1 * window.innerHeight &&
        scrollPosition <= secondSection.offsetTop + 1.6 * window.innerHeight
      ) {
        stickyimg.style.marginLeft = "36.5vw";
        fixedDetail.style.marginTop = "-315vh";
        fixedDetail.style.position = "fixed";
      } else if (
        scrollPosition >
        secondSection.offsetTop + 1.6 * window.innerHeight
      ) {
        fixedDetail.style.position = "absolute";
        fixedDetail.style.marginTop = "60vh";
        stickyimg.style.marginLeft = "36.5vw";
      } else if (
        scrollPosition <
        secondSection.offsetTop + 1 * window.innerHeight
      ) {
        fixedDetail.style.position = "sticky";
        fixedDetail.style.marginTop = "0vh";
        stickyimg.style.marginLeft = "1vw";
        fixedDetail2.style.position = "absolute";
        fixedDetail2.style.marginTop = "60vh";
        stickyimg2.style.marginLeft = "1vw";
      }

      // Scroll behavior for pre2text and pre2photo1
      if (
        scrollPosition >= secondSection.offsetTop + 2 * window.innerHeight &&
        scrollPosition <= secondSection.offsetTop + 3.1 * window.innerHeight
      ) {
        console.log("first");
        stickyimg2.style.marginLeft = "36.5vw";
        fixedDetail2.style.marginTop = "-415vh";
        fixedDetail2.style.position = "fixed";
      } else if (
        scrollPosition >
        secondSection.offsetTop + 3.1 * window.innerHeight
      ) {
        fixedDetail2.style.position = "absolute";
        fixedDetail2.style.marginTop = "110vh";
        stickyimg2.style.marginLeft = "1vw";
      } else if (
        scrollPosition <
        secondSection.offsetTop + 3.1 * window.innerHeight
      ) {
        console.log("third");
        fixedDetail2.style.position = "sticky";
        fixedDetail2.style.marginTop = "0vh";
        stickyimg2.style.marginLeft = "1vw";
      }
      // Scroll behavior for moutaintext and moutainphoto1
      if (
        scrollPosition >= secondSection.offsetTop + 4.6 * window.innerHeight &&
        scrollPosition <= secondSection.offsetTop + 5.15 * window.innerHeight
      ) {
        console.log("first");
        stickyimg3.style.marginLeft = "36.5vw";
        fixedDetail3.style.marginTop = "-660vh";
        fixedDetail3.style.position = "fixed";
      } else if (
        scrollPosition >
        secondSection.offsetTop + 5.15 * window.innerHeight
      ) {
        fixedDetail3.style.position = "absolute";
        fixedDetail3.style.marginTop = "70vh";
        stickyimg3.style.marginLeft = "36.5vw";
      } else if (
        scrollPosition <
        secondSection.offsetTop + 5.15 * window.innerHeight
      ) {
        console.log("third");
        fixedDetail3.style.position = "sticky";
        fixedDetail3.style.marginTop = "15vh";
        stickyimg3.style.marginLeft = "1vw";
      }
    });
  });
});
