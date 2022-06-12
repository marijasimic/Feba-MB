// BACK TO PREVIOUS PAGE
const backToPrevious = document.querySelector(".back");

backToPrevious.addEventListener("click", function () {
  window.location.assign("index.html#section-2");
});

// OPEN FULL IMAGE
const images = document.querySelectorAll(".image");
const fullImageBox = document.querySelector(".full-image-box");
const fullImage = document.getElementById("full-image");

images.forEach(function (img) {
  img.addEventListener("click", function () {
    fullImageBox.style.display = "flex";
    fullImage.src = img.getAttribute("src");
  });
});

// CLOSE FULL IMAGE (click on X)
const closeOnX = document.querySelector(".close-image");
closeOnX.addEventListener("click", function () {
  fullImageBox.style.display = "none";
});

//CLOSE FULL IMAGE (click on BACKGROUND)
fullImageBox.addEventListener("click", function () {
  fullImageBox.style.display = "none";
});

//CLOSE FULL IMAGE (click on ESC)
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    fullImageBox.style.display = "none";
  }
});

/*
//CHANGE IMAGE
const btnRight = document.getElementById("right-arrow");
const btnLeft = document.getElementById("left-arrow");
let curImage = 0;
const maxImage = images.length;

goToImage(0);

const nextImage = function () {
  if (curImage === maxImage - 1) {
    curImage = 0;
  } else {
    curImage++;
  }
  goToImage(curImage);
};

const prevImage = function () {
  if (curImage === 0) {
    curImage = maxImage - 1;
  } else {
    curImage--;
  }
  goToImage(curImage);
};

btnLeft.addEventListener("click", prevImage);
btnRight.addEventListener("click", nextImage);
*/