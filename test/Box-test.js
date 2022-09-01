const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
const Box = require('../src/Box');

//setup test 'true = true'
describe('Box', function() {
    it('should return true', function() {
        expect(true).to.equal(true);
    });

       it('should have a default height of 100', function() {
        const box = new Box ();
        expect(box.height).to.equal(100);
    });

    it('should have a default width of 100', function() {
        const box = new Box ();
        expect(box.width).to.equal(100);
    });

    it('should be able to be passed a height and width', function() {
        const box1 = new Box (200, 50);
        const box2 = new Box (300, 150);

        expect(box1.height).to.equal(200);
        expect(box1.width).to.equal(50);
        expect(box2.height).to.equal(300);
        expect(box2.width).to.equal(150);
    });

    it('should calculate the area of the box', function() {
        const box1 = new Box (100, 50);
        const box2 = new Box (200, 200);

        box1.calcArea();
        box2.calcArea();

        expect(box1.area).to.equal(5000);
        expect(box2.area).to.equal(40000);
    });

    it('should be able to increase the width', function(){
        const box1 = new Box ();
        const box2 = new Box (50, 150);

        box1.increaseWidth(20);
        box2.increaseWidth(40);

        expect(box1.width).to.equal(120);
        expect(box2.width).to.equal(190)
    });

    it('should be able to increase the height', function (){
        const box1 = new Box ();
        const box2 = new Box (55, 90);

        box1.increaseHeight(30);
        box2.increaseHeight(50);

        expect(box1.height).to.equal(130);
        expect(box2.height).to.equal(105);
    });
});