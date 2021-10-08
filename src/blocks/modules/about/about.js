const aboutBtnLg = document.querySelector(".js-about-content-link-lg");
const aboutBtnSm = document.querySelector(".js-about-content-link-sm");
const aboutText = document.querySelector(".js-about-content-text");

try {
  aboutBtnLg.addEventListener("click", function (e) {
    aboutText.classList.add("active");
  });

  aboutBtnSm.addEventListener("click", function (e) {
    aboutText.classList.add("active");
  });
} catch (error) {
  console.log(error);
}
