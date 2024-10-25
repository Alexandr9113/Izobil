document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
    });
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });