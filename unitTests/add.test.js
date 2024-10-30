const {expect} = require('chai');
const {add} = require('../src/add');

describe('Simple mocha test to verify ci pipeline functionality', ()=>{
    describe('add()', ()=>{
        it('1 + 2 should equal 3', ()=>{
            const res = add(1, 2);
            expect(res).to.equal(5);
        });
    });
});