const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
// const Box = require('../src/Box');

//setup test 'true = true'
describe('Box', function() {
    it('should return true', function() {
        expect(true).to.equal(true);
    });

    it('should instantiate a Box', function() {
        const box = new Box ();
        assert.isObject(direwolf);
    });

    it('should have a default height of 100', function() {
        const box = new Box ();
        assert.equal(box.height, 100);
    });

    it('should have a default width of 100', function() {
        const box = new Box ();
        assert.equal(box.width, 100);
    });

    it.skip('should be able to be passed a height and width', function() {
        const box1 = new Box (200, 50);
        const box2 = new Box (300, 150);

        assert.equal(box1.height, 200);
        assert.equal(box1.width, 50);
        assert.equal(box2.height, 300);
        assert.equal(box2.width, 150);
    });

    it.skip('should calculate the area of the box', function() {
        const box1 = new Box (100, 50);
        const box2 = new Box (200, 200);

        box1.calcArea();
        box2.calcArea();

        assert.equal(box1.area, 5000);
        assert.equal(box2.area, 40000);
    });
});