const elements = document.querySelector(".js-complectations-hidden-elements");
const complectationsBtn = document.querySelector(
  ".js-complectations-show-more-btn"
);

try {
  complectationsBtn.addEventListener("click", function (e) {
    elements.classList.add("active");
  });
} catch (error) {
  console.log(error);
}
