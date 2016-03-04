function Battle(image, image2, trigger){
	
	this.image = image;
	this.image2 = image2;
	this.trigger = trigger;
	
	var _this = this;
	
	this.init = function(){
			
		this.trigger.on('click', function(){
			
			x = randomize(30, 150);
			y  = randomize(-30, -150);
			
			_this.image.css('transform', 'rotate('+ x + 'deg)');
			_this.image2.css('transform', 'rotate('+ y + 'deg)');
			
			
			});	
			
			
			
	}
	
}