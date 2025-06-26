const currImg = 1;
const currFeature = ["feature-1", "feature-2", "feature-3"];
const currFeatureImage = ["feature-image-1", "feature-image-2", "feature-image-3"];

const mobileMenuStatus = 0; // 0 is closed, 1 is opened

window.onload = function(){
    const leftButton = document.getElementById("left-arrow");
    leftButton.addEventListener("click", shiftImageLeft);

    const rightButton = document.getElementById("right-arrow");
    rightButton.addEventListener("click", shiftImageRight);

    const mobileMenuButton = document.getElementById("mobile-menu-button");
    mobileMenuButton.addEventListener("click", adjustMenu);

    const closeMobileMenuButton = document.getElementById("mobile-close-menu-button");
    closeMobileMenuButton.addEventListener("click", adjustMenu);
}

function shiftImageLeft(){
    var prevImg = currImg;
    currImg = currImg - 1;
    if (currImg == 0){
        currImg = 3;
    }

    var retrievePrevImg = document.getElementById(currFeatureImage[prevImg-1]);
    var retrieveCurrImg = document.getElementById(currFeatureImage[currImg-1]);

    retrievePrevImg.className = "display-none";
    retrieveCurrImg.className = "";

    var retrievePrevText = document.getElementById(currFeature[prevImg-1]);
    var retrieveCurrText = document.getElementById(currFeature[currImg-1]);

    retrievePrevText.className = "display-none";
    retrieveCurrText.className = "current-box";
}

function shiftImageRight(){
    var prevImg = currImg;
    currImg = currImg + 1;
    if (currImg == 4){
        currImg = 1;
    }

    var retrievePrevImg = document.getElementById(currFeatureImage[prevImg-1]);
    var retrieveCurrImg = document.getElementById(currFeatureImage[currImg-1]);
    retrievePrevImg.className = "display-none";
    retrieveCurrImg.className = "";
    var retrievePrevText = document.getElementById(currFeature [prevImg-1]);
    var retrieveCurrText = document.getElementById(currFeature [currImg-1]);
    retrievePrevText.className = "display-none";
    retrieveCurrText.className = "current-box";
}