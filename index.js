window.onload = function () {
  const burger = document.querySelector(".real-nav");
  const button = document.querySelector(".burger-slider");
  let isShown = false;

  button.addEventListener("click", () => {
    if (isShown) {
      burger.classList.remove("show");
      setTimeout(() => {
        burger.classList.remove("block");
      }, 500);
      button.classList.remove("burger-slider-click");
      isShown = !isShown;
    } else {
      burger.classList.add("block");
      setTimeout(() => {
        burger.classList.add("show");
      }, 100);
      button.classList.add("burger-slider-click");
      isShown = !isShown;
    }
  });
};
