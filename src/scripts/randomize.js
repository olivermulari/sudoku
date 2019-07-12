import { isValid } from './check';
import { options } from './options';
import { removeValues } from './empty';
import { generate } from './generator';

export function randomize() {
    const board = generate();
    removeValues(board, 35);
    return board;
}