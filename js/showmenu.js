var menu = document.getElementById("menu");
var buttonShow = document.getElementById("show-menu");
var buttonHide = document.getElementById("hide-menu");

function showAndHideElement(menu, buttonShow, buttonHide) {
    buttonShow.onclick = function () {
        menu.classList.toggle("show");
    }

    buttonHide.onclick = function () {
        menu.classList.toggle("show");
    }
}

showAndHideElement(menu, buttonShow, buttonHide);
