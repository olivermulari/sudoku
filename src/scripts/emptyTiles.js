import { options } from './options.js';

export function removeValues(board, amount) {
    const r = Math.floor(amount / 2);

    // First remove tiles randomly
    for (let i = 0; i < r; i++) {
        removeRandomValue(board);
    }

    // Then remove the tile with fewest options
    for (let i = 0; i < amount - r; i++) {
        removeEasiestValue(board);
    }
}

export function removeValuesPerRow(board, amount) {
    if (amount > 0 && amount < 9) {
        for (let i = 1; i <= 9; i++) {
            removeExistingValueFromRow(board, i)
        }
        removeValuesPerRow(board, amount - 1)
    } else {
        console.log("tried to remove too many values")
    }
}

// beacuse sudoku is valid, evry number exist only once in a row
function removeExistingValueFromRow(board, row) {
    const existingValues = board[row - 1].filter((val) => val !== 0);
    if (existingValues.length > 0) {
        const ri = Math.floor(Math.random() * existingValues.length); // random index
        const colI = board[row - 1].indexOf(existingValues[ri])
        board[row - 1][colI] = 0;
    }
}

function removeRandomValue(board) {
    const col = Math.floor(Math.random() * 9 + 1);
    const row = Math.floor(Math.random() * 9 + 1);
    removeValueFrom(board, row, col);
}

function removeEasiestValue(board) {

    const copy = Array(9).fill(Array(9).fill(0));

    for (let r = 1; r <= 9; r++) {
        for (let c = 1; c <= 9; c++) {
            if (board[r - 1][c - 1] !== 0) {
                copy[r - 1][c - 1] = [r, c, options(board, r, c)];
            }
        }
    }

    const sorted = copy.flat().filter((x) => x !== 0)
                      .sort((l, r) => l[2].length - r[2].length);
    if (sorted[0]) {
        const removable = sorted.filter((x) => x[2].length === sorted[0][2].length);
        const rand = Math.floor(Math.random() * removable.length);
        const toRemove = removable[rand];
        removeValueFrom(board, toRemove[0], toRemove[1]);
    }
}

function removeValueFrom(board, row, col) {
    board[row - 1][col - 1] = 0;
}