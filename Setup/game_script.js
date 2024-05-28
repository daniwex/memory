'use strict';
import Grid from "./gridfactory.js";


let t = 0;
let started = false;
const url = window.location.toString()
const theme = url.split('?')[1]
const players = url.split('?')[2]
const grid = url.split('?')[3]

const newGrid = new Grid(grid[0]);

newGrid.createGrid(document.body, 'gridContainer', 'grid-class');
newGrid.createStats(players, document.body, 'stats-container')
let gridElements = Array.from(document.getElementsByClassName('grid-class'));

newGrid.shuffle(gridElements)


let newGame = document.getElementById('new-game');
newGame.addEventListener('click', () => {
    window.location.replace('../index.html')
})
let countMove = 0
let timer = document.getElementById('timer');
let arr = []
gridElements.forEach(el => {
    el.addEventListener('click', (e) => {
        let move = document.getElementById('move');
        move.innerText = parseInt(move.innerText) + 1 
        if (!started) {
            setInterval(startTimer, 1000)
        }
        if (countMove == 2) {
            let firstEl = arr[0];
            let secondEl = arr[1];
            if (firstEl.innerText == secondEl.innerText) {
                arr.forEach(el => {
                    el.style.color = 'white'
                    el.style.backgroundColor = '#FDA214'
                })
                arr = []
            } else {
                arr.forEach(el => {
                    el.style.color = '#152938';
                    el.style.backgroundColor = '#152938'
                })
                arr = []
            }
            countMove = 0;
        }
        el.style.color = 'white'
        el.style.backgroundColor = '#FDA214'
        started = true;
        arr.push(el)
        countMove++
    })
})


function startTimer() {
    t++
    let hour = Math.floor(t / 60)
    let min = Math.floor(t / 10) % 6
    let sec = t % 10

    timer.innerText = `${hour}:${min}${sec}`
}