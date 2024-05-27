'use strict';
import Grid from "./gridfactory.js";


let t = 0;
let started = false;
const url = window.location.toString()
const theme = url.split('?')[1]
const players = url.split('?')[2]
const grid = url.split('?')[3]

const newGrid = new Grid(grid[0]);

newGrid.createGrid(document.body,'gridContainer','grid-class');
newGrid.createStats(players,document.body, 'stats-container')

let gridElements = Array.from(document.getElementsByClassName('grid-class'));
let timer = document.getElementById('timer');

gridElements.forEach(el => {
    el.addEventListener('click', ()=>{
        started = true;
        if(started){
            cu()
            let move = document.getElementById('move');
            move.innerText = parseInt(move.innerText) + 1
        }
    })
})


function startTimer(){
    let hour = timer.innerText.split(':')[0]
    let min = timer.innerText.split(':')[1][0]
    let sec = timer.innerText.split(':')[1][1]
    let remainer = Math.floor((parseInt(sec) + 1) / 10)

    timer.innerText = `${hour}:${remainer}${(parseInt(sec) + 1) % 10}`
}


function cu(){
    setInterval(startTimer, 1000)
}


