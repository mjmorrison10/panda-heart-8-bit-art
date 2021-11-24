const PandaWrapper = document.querySelector(".panda-wrapper");
const Panda = document.querySelector(".panda");
const Text = document.querySelector(".text");
const Header = document.querySelector("h1");

PandaWrapper.addEventListener("click", () => {
  // Panda.classList.toggle("heart");
  // for (let i = 0; i < 20; i++) {
  // setTimeout(() => {
  // Panda.classList.toggle("heart");
  // }, 1000);
  // }
  Panda.classList.toggle("heart");
  Text.style.display = "block";
  Header.innerHTML = "Wait for it...";
  Text.innerHTML = "I love you";
  Text.style.fontSize = "4.5rem";
  Text.style.top = "0";
  Text.style.bottom = "inherit";
  Text.style.color = "black";
  Text.style.webkitTextStroke = "1px white";
  Text.style.textShadow = "0 0px 0px transparent";

  var time = 1;

  var interval = setInterval(function () {
    if (time <= 10) {
      Panda.classList.toggle("heart");
      Text.style.display = Text.style.display === "block" ? "none" : "block";
      time++;
    } else {
      Panda.classList.remove("heart");
      Text.style.display = "block";
      Text.innerHTML = "Happy birthday Jordan Long!";
      Text.style.fontSize = "2.9rem";
      Text.style.top = "inherit";
      Text.style.bottom = "0";
      Text.style.color = "white";
      Text.style.webkitTextStroke = "2px black";
      Text.style.textShadow = "0 -5px 20px black";
      Header.innerHTML = "Click or tap to replay!";
      clearInterval(interval);
    }
  }, 1000);
});
