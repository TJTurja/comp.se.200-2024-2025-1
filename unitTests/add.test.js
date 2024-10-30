import {expect} from 'chai';
import add from '../src/add.js';

describe('Simple mocha test to verify ci pipeline functionality', ()=>{
    describe('add()', ()=>{
        it('1 + 2 should equal 3', ()=>{
            const res = add(1, 2);
            expect(res).to.equal(3);
        });
    });
});