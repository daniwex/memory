"use strict";

const theme = document.getElementById("theme");
const players = document.getElementById("players");
const grid = document.getElementById("grid");
const startBtn = document.getElementById("start");
const themeOptions = Array.from(theme.children);
const playersOptions = Array.from(players.children);
const gridOptions = Array.from(grid.children);

let selectedTheme, selectedPlayer
let selectedGrid = null;

function removeClass(arr, classname) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains(classname)) {
      arr[i].classList.remove(classname);
    }
  }
}

themeOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeClass(themeOptions, "selected");
    el.classList.add("selected");
  });
});
playersOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeClass(playersOptions, "selected");
    el.classList.add("selected");
  });
});
gridOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    removeClass(gridOptions, "selected");
    el.classList.add("selected");
  });
});

startBtn.addEventListener("click", () => {
  selectedTheme = themeOptions.find((el) => el.classList.contains("selected"));
  selectedPlayer = playersOptions.find((el) =>
    el.classList.contains("selected")
  );
  selectedGrid = gridOptions.find((el) => el.classList.contains("selected"));
  window.location.replace(`./game.html?${selectedTheme.innerText}?${selectedPlayer.innerText}?${selectedGrid.innerText}`)
});




