const PandaWrapper = document.querySelector(".panda-wrapper");
const Text = document.querySelector(".text");

PandaWrapper.addEventListener("click", () => {
  Text.style.display = Text.style.display === "block" ? "none" : "block";
});

