// metrogo-sticky-nav.js (GSAP ScrollTrigger pin for MetroGo chapter nav)
(function () {
  function init() {
    if (!window.gsap) return console.warn("[MetroGo] GSAP not loaded");
    if (!window.ScrollTrigger) return console.warn("[MetroGo] ScrollTrigger not loaded");

    gsap.registerPlugin(ScrollTrigger);

    // Add a hook class so CSS can disable position:sticky when ScrollTrigger is active
    document.documentElement.classList.add("has-scrolltrigger");

    // NOTE: This page repeats the chapter block in multiple sections.
    // Do NOT rely on a single #id (it appears multiple times).
    const splits = document.querySelectorAll(".case-split");
    if (!splits.length) {
      console.warn("[MetroGo] No .case-split found");
      return;
    }

    splits.forEach((split) => {
      const aside = split.querySelector(".case-aside");
      const section = split.closest("section"); // pin should be scoped to its section
      if (!aside || !section) return;

      // Prevent double-init
      if (aside.dataset.stPinned === "1") return;
      aside.dataset.stPinned = "1";

      // Compute a safe end distance so the aside never pins past the section bottom
      const topOffset = 120; // align with your nav spacing
      const endFn = () => {
        const sectionH = section.offsetHeight || 0;
        const asideH = aside.offsetHeight || 0;
        const dist = sectionH - asideH - topOffset;
        return dist > 0 ? "+=" + dist : "+=1";
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top+=" + topOffset,
        end: endFn,
        pin: aside,
        pinSpacing: true,          // keep layout stable inside Bootstrap columns
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      });
    });

    // Images/videos/AOS can change heights after load
    window.addEventListener("load", () => ScrollTrigger.refresh());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
