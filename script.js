//complete this code
let width = 1;
let height = 1;
let side = 1;
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width{
		return(this.width);
	}
	get height{
		return(this.height);
	}

	getArea(this.width,this.height){
		return(this.width*this.height);
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
		this.side = side;
	}
	getPerimeter(this.side){
		return(4*this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
