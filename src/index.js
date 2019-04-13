import "./style.scss";

setInterval(() => {
  document.title = document.title.substr(1) + document.title.substr(0, 1);
  // document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  document.querySelector("header").classList.toggle("alt")
}, 400);

const audio = new Audio("./assets/audio/click.mp3");
document.body.addEventListener("click", () => audio.play());