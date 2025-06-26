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