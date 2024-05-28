class Grid {
    constructor(num) {
        this.num = num
    }
    createGrid(parent, parentClassName, childrenClassName) {
        // create grid like container for elements
        let p = document.createElement('div')
        let c = document.createElement('div')
        for (let i = 0; i < Math.pow(this.num, 2); i++) {
            const span = document.createElement('span');
            span.setAttribute('class', childrenClassName)
            span.innerText = i % Math.floor((Math.pow(this.num, 2)) / 2)
            span.style.color = '#152938'
            c.appendChild(span)
        }
        p.setAttribute('class', parentClassName)
        c.style.gridTemplateColumns = `repeat(${this.num},1fr)`
        p.appendChild(c)
        parent.appendChild(p)
    }
    createStats(numofplayers, parent, parentClassName) {
        if (numofplayers == 1) {
            const el = document.createElement('div')
            el.setAttribute('class', parentClassName)
            const time = document.createElement('span')
            const timer = document.createElement('span')
            const moves = document.createElement('span')
            const move = document.createElement('span')
            time.innerHTML = 'Time'
            timer.innerText = '0:00'
            move.innerText = '0'
            timer.setAttribute('id', 'timer')
            move.setAttribute('id', 'move')
            time.appendChild(timer)
            moves.innerText = 'Moves'
            moves.appendChild(move)
            el.appendChild(time)
            el.appendChild(moves)
            parent.appendChild(el)
        }
    }
    shuffle(grid){
        for(let i=0;i< Math.floor(Math.pow(this.num,2));i++){
            let random = Math.floor(Math.random() * Math.pow(this.num,2));
            let temp = grid[random].innerText
            grid[random].innerText = grid[i].innerText;
            grid[i].innerText = temp
        }
    }

}


export default Grid