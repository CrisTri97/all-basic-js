const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
const images = document.querySelectorAll(".image");
const image = document.querySelector(".image");
const frame = document.querySelector(".frame");

let sliderNumber = 1;
const length = images.length;
const widthFrame = frame.offsetWidth;
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const restBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    restBg();
    slider.style.transform = `translateX(-${index * widthFrame}px)`;
    sliderNumber = index + 1;
    button.style.backgroundColor = "white";
  });
});

const changeColor = () => {
  restBg();
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * widthFrame}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * widthFrame}px)`;
  sliderNumber--;
};
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * widthFrame}px)`;
  sliderNumber = length;
};

right.addEventListener("click", () => {
  sliderNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
