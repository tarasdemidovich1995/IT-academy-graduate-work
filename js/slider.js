function slider(paginatorList, sliderField, leftButton, rightButton, currentSlide) {

    function setClassCurrentButton() {
        for (var i = 0; i < paginatorList.length; i++) {
            if (i != currentSlide) {
                paginatorList[i].classList.remove("paginator-link_active");
            } else {
                paginatorList[i].classList.add("paginator-link_active");
            }
        }
    }

    function setSlideTransform(slideNumber) {
        var transform = -(slideNumber * 100);
        sliderField.style.transform = "translateX(" + transform + "%)";
    }

    function paginatorButtonClick(slideNumber, button) {
        button.onclick = function () {
            currentSlide = slideNumber;
            setSlideTransform(slideNumber)
            setClassCurrentButton();
        }
    }

    var numberOfSlides = paginatorList.length - 1;

    leftButton.onclick = function () {
        if (currentSlide != 0) {
            currentSlide--;
            console.log(currentSlide);
            setSlideTransform(currentSlide)
            setClassCurrentButton();
        }
    }

    rightButton.onclick = function () {
        if (currentSlide < numberOfSlides) {
            currentSlide++;
            console.log(currentSlide);
            setSlideTransform(currentSlide)
            setClassCurrentButton();
        }
    }

    for (var i = 0; i < paginatorList.length; i++) {
        paginatorButtonClick(i, paginatorList[i]);
    }
}


var reviewsPaginatorList = document.querySelectorAll(".paginator-link_reviews");
var reveiwsSliderField = document.getElementById("reviews-slider");
var reviewsLeft = document.getElementById("reviews-left");
var reviewsRight = document.getElementById("reviews-right");

slider(reviewsPaginatorList, reveiwsSliderField, reviewsLeft, reviewsRight, 1);

var workPaginatorList = document.querySelectorAll(".paginator-link_work");
var workSliderField = document.getElementById("work-slider");
var workLeft = document.getElementById("work-left");
var workRight = document.getElementById("work-right");

slider(workPaginatorList, workSliderField, workLeft, workRight, 1);

