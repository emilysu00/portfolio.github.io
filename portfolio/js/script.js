// AOS may not be loaded yet on some pages (script order).
// If AOS isn't ready, calling AOS.init will throw and stop ALL scripts
// (including the custom cursor/spotlight).
const initAOS = () => {
  if (window.AOS && typeof window.AOS.init === "function") {
    window.AOS.init({
      offset: 200, // 設定觸發動畫的距離
      delay: 0, // 動畫延遲時間
      duration: 800, // 動畫持續時間
    });
  }
};

document.addEventListener("DOMContentLoaded", initAOS);
window.addEventListener("load", initAOS);

document.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.getElementById("spotlight");

  let mouseX = 0;
  let mouseY = 0;
  let lastX = 0;
  let lastY = 0;

  // 更新滑鼠位置的函數
  const updateMousePosition = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 計算 spotlight 和 tail 的寬度與高度
    const spotlightWidth = spotlight.offsetWidth;
    const spotlightHeight = spotlight.offsetHeight;

    // 更新 spotlight 和 tail 位置，將元素中心與滑鼠位置對齊
    spotlight.style.left = `${mouseX - spotlightWidth / 2}px`;
    spotlight.style.top = `${mouseY - spotlightHeight / 2}px`;

    const deltaX = mouseX - lastX;
    const deltaY = mouseY - lastY;

    lastX = mouseX;
    lastY = mouseY;
  };

  // 確保每次移動滑鼠時都會觸發 updateMousePosition 函數
  document.addEventListener("mousemove", updateMousePosition);

  // 設置 hover 事件效果
  const hoverSelector =
    ".nav-item a, .en button, .language a, .work a, .pro a, .articles a, .apply a, .update a, .go-top img, #nav a, .panel-item, .panel__card a, #works a, #works .filter-btn, .case-chapter-link, .banner-nav";

  const hoverOn = () => {
    spotlight.style.transition = "transform 0.3s ease";
    spotlight.style.transform = "scale(5)";
    spotlight.style.mixBlendMode = "difference";
  };

  const hoverOff = () => {
    spotlight.style.transition = "transform 0.3s ease";
    spotlight.style.transform = "scale(1)";
    spotlight.style.mixBlendMode = "normal";
  };

  // 用事件委派，確保「動態插入的元素」（例如 panel 內容）也能吃到 hover 效果
  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest(hoverSelector);
    if (!el) return;
    // 防止在同一個元素內部移動時重複觸發
    if (e.relatedTarget && el.contains(e.relatedTarget)) return;
    hoverOn();
  });

  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest(hoverSelector);
    if (!el) return;
    if (e.relatedTarget && el.contains(e.relatedTarget)) return;
    hoverOff();
  });
});

// go top
document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.querySelector(".go-top");

  // scroll 時判斷顯示
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  });

  // 點擊滾動回頂部
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
console.log("goTop script loaded");

// go top
document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.querySelector(".go-top");

  // scroll 時判斷顯示
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  });

  // 點擊滾動回頂部
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
console.log("goTop script loaded");

//main 圖片浮現
window.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("#home .img img");
  if (!img) return;
  // 加一點延遲也可以讓畫面更柔和
  setTimeout(() => {
    img.classList.add("fade-in");
  }, 600);
});

// hero parallax (photos follow cursor)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  if (!hero) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (reduceMotion) return;

  const imgs = Array.from(hero.querySelectorAll(".pimg"));
  if (!imgs.length) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const ease = 0.08; // lower = snappier, higher = smoother

  const onMove = (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    targetX = (x - 0.5) * 2; // -1..1
    targetY = (y - 0.5) * 2; // -1..1
  };

  const raf = () => {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    imgs.forEach((img) => {
      const depth = Number(img.dataset.depth || 12);
      const rot = Number(img.dataset.rotate || 0);
      const moveX = currentX * depth;
      const moveY = currentY * depth;
      img.style.transform = `translate(-50%, -50%) translate3d(${moveX}px, ${moveY}px, 0) rotate(${rot}deg)`;
    });

    requestAnimationFrame(raf);
  };

  hero.addEventListener("mousemove", onMove, { passive: true });
  requestAnimationFrame(raf);
});

/* ===== OFFCANVAS_PANEL_HTML_SOURCE_V1 ===== */
document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("panel");
  const overlay = document.getElementById("panelOverlay");
  const panelContent = panel ? panel.querySelector(".panel__content") : null;
  const metaEl = document.getElementById("panelMeta");
  const headingEl = document.getElementById("panelHeading");
  const bodyEl = document.getElementById("panelBody");
  const contentsRoot = document.getElementById("panelContents");

  if (
    !panel ||
    !overlay ||
    !panelContent ||
    !metaEl ||
    !headingEl ||
    !bodyEl ||
    !contentsRoot
  ) {
    return;
  }

  const openPanel = (key) => {
    const src = contentsRoot.querySelector(`.panel-content[data-key="${key}"]`);
    if (!src) {
      metaEl.textContent = "";
      headingEl.textContent = "Details";
      bodyEl.innerHTML = "<p>Content not set yet.</p>";
    } else {
      const meta = src.querySelector(".meta");
      const header = src.querySelector("h4");

      metaEl.textContent = meta ? meta.textContent.trim() : "";
      headingEl.textContent = header ? header.textContent.trim() : "Details";

      const clone = src.cloneNode(true);
      const cloneMeta = clone.querySelector(".meta");
      if (cloneMeta) cloneMeta.remove();
      const cloneHeader = clone.querySelector("h4");
      if (cloneHeader) cloneHeader.remove();
      const html = clone.innerHTML.trim();
      bodyEl.innerHTML = html || "<p>Content not set yet.</p>";
    }

    panel.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("panel-open");
  };

  const closePanel = () => {
    panel.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panel-open");
  };

  document.addEventListener("click", (e) => {
    const item = e.target.closest(".panel-item[data-key]");
    if (item) {
      openPanel(item.dataset.key);
      return;
    }

    if (
      document.body.classList.contains("panel-open") &&
      !e.target.closest("#panel")
    ) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("panel-open")) {
      closePanel();
      return;
    }

    const active = document.activeElement;
    if (
      !active ||
      !active.classList ||
      !active.classList.contains("panel-item")
    ) {
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const key = active.getAttribute("data-key");
      if (key) openPanel(key);
    }
  });

  panelContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-swiper .banner-next",
    prevEl: ".banner-swiper .banner-prev",
  },
});
