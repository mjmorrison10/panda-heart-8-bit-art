const PandaWrapper = document.querySelector(".panda-wrapper");
const Panda = document.querySelector(".panda");
const Text = document.querySelector(".text");
const Header = document.querySelector("h1");

PandaWrapper.addEventListener("click", () => {
  // Panda.classList.toggle("heart");
  // for (let i = 0; i < 20; i++) {
  // setTimeout(() => {
  // console.log("test");
  // Panda.classList.toggle("heart");
  // }, 1000);
  // }
  Panda.classList.toggle("heart");
  Text.style.display = "block";
  Header.innerHTML = "Wait for it...";
  
  var time = 1;
  
  var interval = setInterval(function () {
    if (time <= 10) {
      Panda.classList.toggle("heart");
      Text.style.display = Text.style.display === "block" ? "none" : "block";
      console.log("test");
      // alert(time);
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
      Header.innerHTML = "Click to tap to replay!";
      clearInterval(interval);
    }
  }, 1000);
});


