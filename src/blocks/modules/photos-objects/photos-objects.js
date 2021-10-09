const photosObjectsParent = document.querySelector(".js-photos-objects-items");
const photosObjectsBtn = document.querySelector(
  ".js-photos-objects-show-more-btn"
);

const renderElements = ({ href = "#", data = [] } = {}) => {
  const item = `
        <a class="photos-objects__item" href="${href}">
          <img class="photos-objects__img" src="./img/img03_320.jpg" alt="Фотографии последних объектов">
        </a>
      `;
  photosObjectsParent.insertAdjacentHTML("beforeend", item);
};

try {
  photosObjectsBtn.addEventListener("click", function (e) {
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
  });
} catch (e) {
  console.log(e);
}
