let slideLeftBtn = document.getElementById("slide-btn-left");
let slideRightBtn = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");
// let imgContainer = document.getElementById("image-container");
console.log(imgItem);

let startSlider = 0;
// let endSlider = imgItem.length - 1;
let endSlider = (imgItem.length - 1) * 100;
// slideLeftBtn.addEventListener("click", () => {
//   if (startSlider < 0) {
//     startSlider = startSlider + 100;
//   }
//   imgItem.forEach((ele) => {
//     ele.style.transform = `translateX(${startSlider}%)`;
//   });
// });
// slideRightBtn.addEventListener("click", () => {
//   if (startSlider >= -endSlider + 100) {
//     startSlider = startSlider - 100;
//   }
//   imgItem.forEach((ele) => {
//     ele.style.transform = `translateX(${startSlider}%)`;
//   });
// });
slideLeftBtn.addEventListener("click", handleLeftBtn);

function handleLeftBtn() {
  console.log("hello");
  imgItem.innerHTML = "";
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

slideRightBtn.addEventListener("click", handleRightBtn);
function handleRightBtn() {
  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}
//   automatic slider;

function renderSlideAuto() {
  if (startSlider >= -endSlider + 100) {
    handleRightBtn();
  } else {
    startSlider = 100;
  }
}
setInterval(renderSlideAuto, 2000);
