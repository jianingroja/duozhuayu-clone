window.onload = function () {
  const burger = document.querySelector(".real-nav");
  const button = document.querySelector(".burger-slider");
  let isShown = false;

  button.addEventListener("click", () => {
    if (isShown) {
      burger.classList.remove("show");
      button.classList.remove("burger-slider-click");
      isShown = !isShown;
    } else {
      burger.classList.add("show");
      button.classList.add("burger-slider-click");
      isShown = !isShown;
    }
  });
};
