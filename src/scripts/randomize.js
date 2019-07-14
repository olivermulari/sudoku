import { removeValues } from './emptyTiles';
import { generate } from './generator';

export function randomize() {
    const board = generate();
    removeValues(board, 30);
    return board;
}