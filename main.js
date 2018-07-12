function windowResized() {
	resizeCanvas(window.innerWidth,window.innerHeight);
	clock.resizeClock([window.innerWidth,window.innerHeight]);
}

/*==========
Setup
==========*/
function setup() {	
	createCanvas(window.innerWidth,window.innerHeight);
	clock = new Clock([window.innerWidth,window.innerHeight]);
	textAlign(CENTER);
}

/*==========
Main
==========*/
function draw() {

	clear();
	translate(width/2,height/2);
	background(0);
	
	clock.drawClock();
}