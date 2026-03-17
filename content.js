function removeBlur() {
  document
    .querySelectorAll(
      "span.blur-sm, div.blur-sm, img.blur-\\[6px\\], div.blur-\\[6px\\]"
    )
    .forEach((el) => {
      el.classList.remove("blur-sm", "blur-[6px]");
    });
}

removeBlur();

// Covers SPA navigation / lazy-rendered content too
const observer = new MutationObserver(() => {
  removeBlur();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});