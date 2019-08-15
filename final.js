"use strict"

function tv() {
		this._status = 0;
		this._channels = ["1+1","СТБ","Интер","M1"];
		this._channelNumber = 0;
		this._brightness = 50;
		this._volume = 50;
		
		this.turnOn=function(){
			this._status = 1;
			console.log("TV is turned on.Status " + this._status)
		}
		this.turnOff=function(){
			this._status = 0;
			console.log("TV is turned off.Status " + this._status); 
		}
		this.getStatus=function(){
			console.log("TV has status "  + this._status);
		}
		
		this.increaseBrightness= function(){
			if (this._brightness >=75){
				this._brightness=75;
			}
			
			this._brightness+=25;
			console.log("Brightness level is " + this._brightness);
		}
		this.decreaseBrightness = function(){
			if(this._brightness <=25){
				this._brightness = 25;
			}
			this._brightness-=25;
			console.log("Brightness level is " + this._brightness);
		}
		
		this.nextChannel = function(){
			if (this._channelNumber > 2){
				this._channelNumber=-1;
			}
			this._channelNumber++;
		}
		
		this.previousChannel = function() {
			if (this._channelNumber < 1){
				this._channelNumber = 4;
			}
			this._channelNumber--;
		}
		this.getChannel = function(){
			console.log("Tv is showing channel #" + this._channelNumber + " " + this._channels[this._channelNumber] );
		}
		
		this.volumeUp = function(){
			if(this._volume>=75){
				this._volume=75;
			}
			this._volume+=25;
		}
		this.volumeDown = function(){
			if(this._volume<=25){
				this._volume=25;
			}
			this._volume-=25;
		}
		this.volumeMute
		this.getVolume = function(){
			console.log("My level volume is: " + this._volume);
		}
}

var myTv = new tv();

myTv.getStatus();
myTv.turnOn();
myTv.getStatus();
myTv.turnOff();
myTv.getStatus();

myTv.increaseBrightness();
myTv.increaseBrightness();
myTv.increaseBrightness();

myTv.decreaseBrightness();
myTv.decreaseBrightness();
myTv.decreaseBrightness();
myTv.decreaseBrightness();
myTv.decreaseBrightness();

myTv.nextChannel();
myTv.getChannel();
myTv.nextChannel();
myTv.getChannel();
myTv.nextChannel();
myTv.getChannel();
myTv.nextChannel();
myTv.getChannel();

myTv.previousChannel();
myTv.getChannel();
myTv.previousChannel();
myTv.getChannel();
myTv.previousChannel();
myTv.getChannel();
myTv.previousChannel();
myTv.getChannel();
myTv.previousChannel();
myTv.getChannel();

myTv.volumeUp();
myTv.getVolume();
myTv.volumeUp();
myTv.getVolume();
myTv.volumeUp();
myTv.getVolume();


myTv.volumeDown();
myTv.getVolume();
myTv.volumeDown();
myTv.getVolume();
myTv.volumeDown();
myTv.getVolume();
myTv.volumeDown();
myTv.getVolume();
myTv.volumeDown();
myTv.getVolume();