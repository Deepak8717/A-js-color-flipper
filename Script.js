let container = document.getElementsByClassName("container")[0];
let colorCodeSpan = document.getElementsByClassName("color-code")[0];
let flipBtn = document.getElementById("flipBtn");
let colorArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

flipBtn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorArr[Math.floor(Math.random() * colorArr.length)];
  }
  container.style.background = color;
  colorCodeSpan.innerHTML = color;
});
