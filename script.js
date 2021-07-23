function createGrid(size) {
    
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
        square.classList.add("square")
        container.appendChild(square)
    }
    
}

createGrid(16)