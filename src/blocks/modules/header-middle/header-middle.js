const headerParent = document.querySelector(".js-header-middle-container");
const headerBtn = document.querySelector(".js-header-middle-search-btn");
const headerInput = document.querySelector(".js-header-middle-search-input");

try {
  headerBtn.addEventListener("click", function (e) {
    if (window.innerWidth <= 991) {
      headerParent.classList.add("active");
    }
  });
} catch (error) {
  console.log(error);
}
