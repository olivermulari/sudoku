import { options } from './options.js';

export function removeValues(board, amount) {
    for (let i = 0; i < amount; i++) {
        removeEasiestValue(board);
    }
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

    const removable = copy.flat().filter((x) => x !== 0).filter((x) => x[2].length === 1);

    const toRemove = removable[Math.floor(Math.random() * removable.length)];

    board[toRemove[0] - 1][toRemove[1] - 1] = 0;
}