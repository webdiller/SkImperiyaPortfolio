const photosObjectsParent = document.querySelector(".js-photos-objects-items");
const photosObjectsBtn = document.querySelector(
  ".js-photos-objects-show-more-btn"
);

const renderElements = ({ href = "#", data = [] } = {}) => {
  const item = `
        <a class="photos-objects__item" href="${href}">
            <picture class="photos-objects__picture">
                <source media="(max-width: 320px)" srcset="./img/img03_320.jpg">
                <source media="(max-width: 320px)" srcset="./img/img03_320.webp">
                <source media="(max-width: 480px)" srcset="./img/img03_320.jpg">
                <source media="(max-width: 480px)" srcset="./img/img03_320.webp">
                <source media="(max-width: 768px)" srcset="./img/img03_320.jpg">
                <source media="(max-width: 768px)" srcset="./img/img03_320.webp">
                <source media="(max-width: 1024px)" srcset="./img/img03_320.jpg">
                <source media="(max-width: 1024px)" srcset="./img/img03_320.webp">
                <source srcset="./img/img03_320.webp"><img class="photos-objects__img" src="./img/img03_320.jpg" alt="Фотографии последних объектов">
            </picture>
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
