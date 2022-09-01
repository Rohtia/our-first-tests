class Box {
    constructor (height, width) {
        this.height = height || 100;
        this.width = width || 100;
        this.area;
        this.calcArea = function calcArea () {
            this.area = this.height * this.width;
        }
        this.increaseWidth = function (inc) {
            this.width = this.width + inc;
         }
         this.increaseHeight = function (inc) {
            this.height = this.height + inc;
         }
    }
    
 
}


module.exports = Box;
