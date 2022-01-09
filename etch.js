const main = document.querySelector("#main");
const resetButton = document.getElementById('reset')

function createRow(p) {
    const blockRow = document.createElement("div");
    for (i = 0; i < p; i++) {
        const block = document.createElement("div");
        block.classList.add('block')
        blockRow.appendChild(block);}
    blockRow.classList.add('blockRow');
    main.appendChild(blockRow)}

function addRow(p = 16) {
for (x = 0; x < p; x++) {
    createRow(p)};
    hovers();
}

function hovers() {
    const squares = document.querySelectorAll(".block");
    squares.forEach((square) => {
        square.addEventListener('mouseenter', function(e) {square.classList.add('highlight')})
    })}

function reset() {
    const board = document.querySelectorAll(".block");
    board.forEach((tile) => {
        tile.classList.remove('highlight')})
    rows = document.querySelectorAll(".blockRow")
    let boardSize = document.getElementById('main').offsetHeight
    console.log(boardSize)
    for (t = 0; t < rows.length; t++) {
    document.querySelector(".blockRow").remove();}
    reTile();
}

resetButton.addEventListener('click', reset)

function reTile() {
    p = prompt("how many tiles per side")
    // while ((p < 1) || (typeof p != Number) || (p === NaN)) {p = Number(prompt("how many tiles per side"));
    //    console.log(p)
    //     }
    blockSize = (512 / p) - 2;
    addRow(p)
    const blocks = document.querySelectorAll(".block")
    blocks.forEach((block) => {
        block.style.height = blockSize + "px";
        block.style.width = blockSize + "px";
        // block.setAttribute('max-height', blockSize + "px");
        // block.setAttribute('max-width', blockSize + "px");
        // block.style.height = `{$blockSize}`;
        // block.style.width = `{$blockSize}`;
    })
}