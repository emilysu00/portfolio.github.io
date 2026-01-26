// works filter (works.html)
// UX: click to toggle one category; click active again to clear.
// No active selection => show all.

document.addEventListener("DOMContentLoaded", () => {
  const filterWrap = document.querySelector("#works .work-filter");
  const buttons = Array.from(document.querySelectorAll("#works .filter-btn"));
  const cards = Array.from(
    document.querySelectorAll("#works .work-card[data-filters]"),
  );

  if (!filterWrap || buttons.length === 0 || cards.length === 0) return;

  const setActive = (keyOrNull) => {
    buttons.forEach((btn) => {
      const isActive = keyOrNull && btn.dataset.filter === keyOrNull;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const activeKey = keyOrNull;

    cards.forEach((card) => {
      const filters = (card.dataset.filters || "")
        .split(/\s+/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean);

      const shouldShow = !activeKey || filters.includes(activeKey);
      card.style.display = shouldShow ? "" : "none";
    });

    if (window.AOS && typeof AOS.refreshHard === "function") {
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    }
  };

  setActive(null);

  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      const key = (btn.dataset.filter || "").toLowerCase();
      const isAlreadyActive = btn.classList.contains("is-active");
      setActive(isAlreadyActive ? null : key);
    });
  });
});
