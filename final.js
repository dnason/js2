"use strict"

function tv() {
	
		this._status = 0;
		this._channels = ["1+1","СТБ","Интер","M1"];
		this._channelNumber = 0;
		this._brightness = 50;
		this._volume = 50;
		
		tv.prototype.turnOn=function(){
			this._status = 1;
		}
		tv.prototype.turnOff=function(){
			this._status = 0;
		}
		tv.prototype.getStatus=function(){
			return this._status;
		}
		
		tv.prototype.increaseBrightness= function(){
			if (this._brightness >= 75){
				this._brightness = 75;
			}
			this._brightness += 25;
		}
		tv.prototype.decreaseBrightness = function(){
			if(this._brightness <= 25){
				this._brightness = 25;
			}
			this._brightness -= 25;
		}
		tv.prototype.getBrightness = function(){
			return this._brightness;
		}
		
		tv.prototype.nextChannel = function(){
			if (this._channelNumber > 2){
				this._channelNumber = -1;
			}
			this._channelNumber++;
		}
		
		tv.prototype.previousChannel = function() {
			if (this._channelNumber < 1){
				this._channelNumber = 4;
			}
			this._channelNumber--;
		}
		tv.prototype.getChannel = function(){
			return this._channels[this._channelNumber];
		}
		
		tv.prototype.volumeUp = function(){
			if(this._volume >= 75){
				this._volume = 75;
			}
			this._volume += 25;
		}
		tv.prototype.volumeDown = function(){
			if(this._volume <= 25){
				this._volume = 25;
			}
			this._volume-= 25;
		}
		tv.prototype.volumeMute = function(){
			this._volume = 0;
		}
		tv.prototype.getVolume = function(){
			return this._volume;
		}
}

var myTv = new tv();

console.log("My current status " + myTv.getStatus());
myTv.turnOn();
console.log("My current status " + myTv.getStatus());
myTv.turnOff();
console.log("My current status " + myTv.getStatus());

myTv.increaseBrightness();
console.log("Current brightness " + myTv.getBrightness());
myTv.decreaseBrightness();

console.log("Current brightness " + myTv.getBrightness());


console.log(myTv.getChannel());
myTv.nextChannel()
console.log(myTv.getChannel());
myTv.nextChannel()
console.log(myTv.getChannel());
myTv.nextChannel()
console.log(myTv.getChannel());
myTv.nextChannel()
console.log(myTv.getChannel());

myTv.previousChannel();
console.log(myTv.getChannel());
myTv.previousChannel();
console.log(myTv.getChannel());
myTv.previousChannel();
console.log(myTv.getChannel());
myTv.previousChannel();
console.log(myTv.getChannel());
myTv.previousChannel();

myTv.volumeUp();
console.log(myTv.getVolume())
myTv.volumeDown();
console.log(myTv.getVolume())
myTv.volumeDown();
console.log(myTv.getVolume())
myTv.volumeMute();
console.log(myTv.getVolume())