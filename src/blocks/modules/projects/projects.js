const projectsParent = document.querySelector(".js-projects-items");
const projectsBtn = document.querySelector(".js-projects-show-more-btn");

const renderElements = ({
  price = 1000,
  innerWidth = 100,
  outWidth = 140,
  type = "Каркасный дом",
  name = "Проект лидер",
  data = [],
} = {}) => {
  const item = `
        <div class="projects__item">
          <img class="projects__item-img" src="./img/img03_320.jpg" alt="Проект лидер изображение дома">
            <div class="projects__item-data">
                <div class="projects__item-top">
                <div class="projects__item-info">
                    <p class="projects__item-info-type">${type}:</p>
                    <p class="projects__item-info-name">${name}</p>
                </div>
                <div class="projects__item-values">
                    <div class="projects__item-value"><img class="projects__item-value-icon" src="./img/svg/icon-inner.svg"><span class="projects__item-value-text">${innerWidth}</span></div>
                    <div class="projects__item-value"><img class="projects__item-value-icon" src="./img/svg/icon-outer.svg"><span class="projects__item-value-text">${outWidth} м2</span></div>
                </div>
                </div>
                <div class="projects__item-bottom">
                <p class="projects__item-price">от <strong>${price}</strong> рублей</p>
                </div><a class="ui-btn ui-btn_accent ui-btn_round projects__item-link" href="#">Подробнее</a>
            </div>
        </div>
      `;
  projectsParent.insertAdjacentHTML("beforeend", item);
};

try {
  projectsBtn.addEventListener("click", function (e) {
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
