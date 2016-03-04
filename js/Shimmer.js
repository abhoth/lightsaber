function Shimmer(image, opacity, speed){
	
	this.image = image;
	this.opacity = opacity;
	this.speed = speed;
	
	var _this = this;
	
	this.animation = function(opac, distance){
		this.image.animate({opacity: opac *.01, top: distance}, 50);
	}
	
	this.seed = function(){
		var opacityLowThreshold = this.opacity - 5;
		var opacityHighThreshold = this.opacity + 5;
		var distance = randomize(-1, 1);
		var opac = randomize(opacityLowThreshold, opacityHighThreshold);
		this.animation(opac,distance);
	}
	
	this.time = function(speed){
		console.log(speed);
		var timer = setInterval(function(){
			_this.seed();
		}, speed);	
		
	}
	
	this.init = function(){
			this.time(this.speed);
	}
	
}