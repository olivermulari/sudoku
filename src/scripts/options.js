import { getBox, getColumn } from './check.js';

export function options(board, row, col) {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const rowArr = Array.from(board[row - 1]);
    rowArr.splice(col - 1, 1);

    const colArr = getColumn(board, col);
    colArr.splice(row - 1, 1);

    const boxArr = getBox(board, row, col);
    const boxIndex = ((row - 1) % 3) * 3 + ((col - 1) % 3);
    boxArr.splice(boxIndex, 1);

    const forbiddenValues = (val) => Array.from(new Set(rowArr.concat(colArr).concat(boxArr))).every((x) => x !== val);

    return options.filter(val => forbiddenValues(val));
}