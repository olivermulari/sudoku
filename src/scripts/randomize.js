import { isValid } from './check.js';
import { options } from './options.js';

export function randomize(board, times) {
    
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);

    // const caseNum = Math.floor(Math.random() * 5);

    console.log(options(board, 1, 4))
}