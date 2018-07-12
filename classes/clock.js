class Clock {
	//Constructor
	constructor(_window_vector) {
		this.window_vector = _window_vector;
		this.arc_stroke_weight = this.window_vector[0]/200;
		this.arc_buffer = this.arc_stroke_weight*3;

		this.time = new Date();

		this.millisecond_color = [225,118,7,255];
		this.second_color = [232,22,12,255];
		this.minute_color = [223,0,255,255];
		this.hour_color = [38,12,232,255];
		this.backfill_color = [122,122,122,255/4];
	}


	//Modifiers
	resizeClock(_window_vector) {
		this.window_vector = _window_vector;
	}


	//Drawers
	drawClock() {
		this.time = new Date();

		this.drawArcClock();
		this.drawStaticTime();
	}
	drawArcClock() { //Maps current time to an arc for specified seconds, minutes, hours, etc.
		noFill();
		strokeWeight(this.arc_stroke_weight);

		//Backfill
		stroke(this.backfill_color);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer*3,(this.window_vector[0]/2)-this.arc_buffer*3, map(this.time.getMilliseconds(),1,1000,0,PI*2), 0);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer*2,(this.window_vector[0]/2)-this.arc_buffer*2, map(this.time.getSeconds(),1,60,0,PI*2), 0);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer,(this.window_vector[0]/2)-this.arc_buffer, map(this.time.getMinutes(),1,60,0,PI*2), 0);
		arc(0, 0, (this.window_vector[0]/2),(this.window_vector[0]/2), map(this.time.getHours(),1,24,0,PI*2), 0);

		//Millisecond
		stroke(this.millisecond_color);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer*3,(this.window_vector[0]/2)-this.arc_buffer*3,0,map(this.time.getMilliseconds(),0,1000,0,PI*2));

		//Second
		stroke(this.second_color);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer*2,(this.window_vector[0]/2)-this.arc_buffer*2,0,map(this.time.getSeconds(),0,60,0,PI*2));

		//Minute
		stroke(this.minute_color);
		arc(0, 0, (this.window_vector[0]/2)-this.arc_buffer,(this.window_vector[0]/2)-this.arc_buffer,0,map(this.time.getMinutes(),0,60,0,PI*2));

		//Hour
		stroke(this.hour_color);
		arc(0, 0, (this.window_vector[0]/2),(this.window_vector[0]/2),0,map(this.time.getHours(),0,24,0,PI*2));
	}
	drawStaticTime() { //Draws the digital time statically.
		stroke(255);
		strokeWeight(1);

		var time_string = this.time.getHours()+":"+this.time.getMinutes()+":"+this.time.getSeconds();
		text(time_string,0,0);
	}

	
};