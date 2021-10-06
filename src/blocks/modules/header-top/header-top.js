const menuTriggerParent = document.querySelector(".js-header-top");
const menuTrigger = document.querySelector(".js-header-top-menu-trigger");
const menuList = document.querySelector(".js-header-top-menu");

try {
  menuTrigger.addEventListener('click', function (e) {
      e.target.classList.toggle('active');
      menuTriggerParent.classList.toggle('active')
      menuList.classList.toggle('active')
  });
} catch (error) {
    console.log(error);
}
