function Battle(image, image2, trigger){
	
	this.image = image;
	this.image2 = image2;
	this.trigger = trigger;
	
	var _this = this;
	
	this.init = function(){
			
		this.trigger.on('click', function(){
			
			x = randomize(30, 150);
			y  = randomize(-30, -150);
			z = randomize(1,10);
			a = randomize(1,10);
			_this.image.css('transition','transform '+ z * .1 +'s');
			_this.image2.css('transition','transform '+ a * .1 +'s');
			_this.image.css('transform', 'rotate('+ x + 'deg)');
			_this.image2.css('transform', 'rotate('+ y + 'deg)');
			
			
			});	
			
			
			
	}
	
}