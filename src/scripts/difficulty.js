import { removeValues, removeValuesPerRow } from './emptyTiles';
import { generate } from './generator';

export function setBoard(difficulty) {
    console.log(`Started ${difficulty} game`)

    const board = generate();

    removeValuesPerRow(board, 2);
    
    switch (difficulty) {
        case 'easy':
            break;
        case 'medium':
            removeValuesPerRow(board, 1);
            removeValues(board, 10);
            break;
        case 'hard':
            removeValues(board, 35);
            break;
        case 'extreme':
            removeValues(board, 50);
            break;
        default:
            break;
    }
    
    return board;
}