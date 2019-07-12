export function isComplete(board) {
    return isValid(board) && board.flat().filter((val) => val !== 0).length === 81;
}

export function isValid(board) {
    const rowsValid = board.every((row) => arrayIsValid(row));
    const colsValid = getColumns(board).every((col) => arrayIsValid(col));
    const boxesValid = getBoxes(board).every((box) => arrayIsValid(box));
    return rowsValid && colsValid && boxesValid;
}

function arrayIsValid(arr) {
    const noZeros = arr.filter((val) => val !== 0);
    return Array.from(new Set(noZeros)).length === noZeros.length;
}

function getColumns(board) {
    const arr = [];
    for (let i = 1; i <= 9; i++) {
        arr.push(getColumn(board, i));
    }
    return arr;
}

export function getColumn(board, col) {
    return board.map((row) => row[col - 1]);
}

function getBoxes(board) {
    const arr = [];
    for (let row = 1; row <= 9; row += 3) {
        for (let col = 1; col <= 9; col += 3) {
            arr.push(getBox(board, row, col));
        }
    }
    return arr;
}

export function getBox(board, row, col) {
    const arr = [];
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            const r = (row - 1 - (row - 1) % 3) + x;
            const c = (col - 1 - (col - 1) % 3) + y;
            arr.push(board[r][c]);
        }
    }
    return arr;
}
