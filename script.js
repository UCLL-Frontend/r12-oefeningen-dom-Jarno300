const button1 = document.querySelector("#changeTitle");
const title = document.querySelector("#title");
const button2 = document.querySelector("#addText");
const paragraph = document.querySelector("#paragraph");
const button3 = document.querySelector("#changeColor");
const colorBox = document.querySelector("#colorBox");
const button4 = document.querySelector("#hideText");
const text = document.querySelector("#text");
const button5 = document.querySelector("#addItem");
const itemList = document.querySelector("#itemList");

button1.addEventListener("click", () => {
  title.textContent = "JavaScript is geweldig!";
});

button2.addEventListener("click", () => {
  paragraph.insertAdjacentText("beforeend", " Hier is extra tekst!");
});

button3.addEventListener("click", () => {
  colorBox.setAttribute(
    "style",
    "width: 200px; height: 200px; background-color: red"
  );
});

button4.addEventListener("click", () => {
  text.setAttribute("style", "color: transparent");
});

button5.addEventListener("click", () => {
  itemList.insertAdjacentHTML("beforeend", "<li>Nieuw item</li>");
});

const button6 = document.querySelector("#changeTextColor");
const coloredText = document.querySelector("#coloredText");

button6.addEventListener("click", () => {
  coloredText.setAttribute("style", "color: yellow");
});

const button7 = document.querySelector("#showInput");
const input = document.querySelector("#userInput");
const output = document.querySelector("#output");

button7.addEventListener("click", () => {
  output.textContent = input.value;
  console.log(input);
});
