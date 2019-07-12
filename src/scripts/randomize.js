import { isValid } from './check';
import { options } from './options';
import { removeValues } from './empty';
import { generate } from './generator';

export function randomize(board, times) {
    
    const rand1 = Math.floor(Math.random() * 10);
    const rand2 = Math.floor(Math.random() * 10);

    // const caseNum = Math.floor(Math.random() * 5);

    // removeValues(board, 30);

    generate();
}