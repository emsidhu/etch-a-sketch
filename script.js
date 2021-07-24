let size = 16

function createGrid() {
    
    let container = document.querySelector("#container");
    
    let borderWidth = 2;
    let squareWidth = (container.clientWidth / size) - (borderWidth * 2)
    let squareHeight = (container.clientHeight / size) - (borderWidth * 2)
    container.style.cssText = `grid-template-columns: repeat(${size}, ${container.clientWidth / size}px);
        grid-template-rows: repeat(${size}, ${container.clientHeight / size}px)`
    
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.style.cssText = `border: ${borderWidth}px solid black; width: ${squareWidth}px;
            height: ${squareHeight}px;`
        square.classList.toggle("square")
        container.appendChild(square)
        square.addEventListener("mouseover", (e) => {
            square.style.cssText = "background-color: black;"
        })
    }  
}

function resetGrid() {
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        square.classList.toggle("square")
        square.remove()
    })

    createGrid()
}

function changeGrid() {
    size = parseInt(prompt("Choose a new grid size. Example: Typing 16 will make a 16x16 grid (max 100x100)"))
    console.log(size)
    while (size > 100 || Number.isNaN(size)) {
        if (size > 100) {
            size = prompt("Chosen grid size is too large, please choose a smaller size")
        } else {
            size = prompt("Invalid size, please choose a new grid size (max 100x100)")
        }
    }
    resetGrid()
}


createGrid()