import { expect } from 'chai';
import {highPriorityCount} from '../../src/ch07/ReplacePrimitiveWithObject'

describe('highPriorityCount', () => {
    it('has 2 orders', () => {
        expect(highPriorityCount).to.equal(2);
    });
});