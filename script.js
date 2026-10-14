//complete this code
let width = 1;
let height = 1;
let side = 1;
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	getArea(width,height){
		return(width*height);
	}
}

class Square extends Rectangle {
	constructor(width,height,side){
		super(width,height);
		this.side = side;
	}
	getPerimeter(side){
		return(4*side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
