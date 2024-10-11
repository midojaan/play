const board = document.getElementById('board');
const newGameButton = document.getElementById('newGame');

let tiles = [];

function createTiles() {
    tiles = [];
    for (let i = 0; i <= 6; i++) {
        for (let j = i; j <= 6; j++) {
            tiles.push([i, j]);
        }
    }
    shuffleTiles();
}

function shuffleTiles() {
    tiles.sort(() => Math.random() - 0.5);
}

function drawTiles() {
    board.innerHTML = '';
    tiles.forEach(tile => {
        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile');
        tileDiv.innerHTML = `<div>${tile[0]} | ${tile[1]}</div>`;
        tileDiv.onclick = () => alert(`لقد اخترت: ${tile[0]} | ${tile[1]}`);
        board.appendChild(tileDiv);
    });
}

newGameButton.onclick = () => {
    createTiles();
    drawTiles();
};

// بدء اللعبة
createTiles();
drawTiles();
