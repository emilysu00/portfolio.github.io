AOS.init({
  offset: 200, // 設定觸發動畫的距離
  delay: 0, // 動畫延遲時間
  duration: 800, // 動畫持續時間
});

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
  const hoverElements = document.querySelectorAll(
    ".nav-item a, .en a, .language a, .work a, .pro a, .articles a, .apply a, .update a"
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      spotlight.style.transition = "transform 0.3s ease";
      spotlight.style.transform = "scale(3)"; // 當滑鼠進入時放大 spotlight
    });

    element.addEventListener("mouseleave", () => {
      spotlight.style.transition = "transform 0.3s ease";
      spotlight.style.transform = "scale(1)"; // 滑鼠離開時恢復原狀
    });
  });
});

// 滾動時觸發炫光效果
window.addEventListener("scroll", () => {
  const flare = document.getElementById("lens-flare");
  document.body.classList.add("scrolled");

  setTimeout(() => {
    document.body.classList.remove("scrolled");
  }, 800); // 0.8秒後移除
});

//en mode
document.querySelector(".en").addEventListener("click", function () {
  changeLanguage("en");
});
// //dark mode
// document.querySelector(".dark").addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");

//   // 切換按鈕的文字
//   if (document.body.classList.contains("dark-mode")) {
//     this.textContent = "light"; // 切換為 light
//   } else {
//     this.textContent = "dark"; // 切換回 dark
//   }
//   // 根據當前模式自動更新滑鼠指標的混合模式
//   if (document.body.classList.contains("dark-mode")) {
//     document.body.style.mixBlendMode = "screen"; // 在 dark 模式下使用 screen 混合模式
//   } else {
//     document.body.style.mixBlendMode = "normal"; // 在 light 模式下使用 normal 混合模式
//   }
// });
