import { removeValues, removeValuesPerRow } from './emptyTiles';
import { generate } from './generator';

export function setBoard(difficulty) {
    console.log(`Started ${difficulty} game`)

    const board = generate();

    removeValuesPerRow(board, 2)
    
    switch (difficulty) {
        case 'easy':
            removeValues(board, 30);
            break;
        case 'medium':
            removeValues(board, 40);
            break;
        case 'hard':
            removeValues(board, 50);
            break;
        case 'extreme':
            removeValues(board, 60);
            break;
        default:
            break;
    }
    
    return board;
}