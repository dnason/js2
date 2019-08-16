"use strict"

function Device(status,volume){
	this._status = 0;
	this._volume = 50;
}
	Device.prototype.turnOn = function(){
			this._status = 1;
		}
		
	Device.prototype.turnOff = function(){
			this._status = 0;
		}
	Device.prototype.getStatus = function(){
			return this._status;
		}
	Device.prototype.volumeUp = function(){
			if(this._volume >= 75){
				this._volume = 75;
			}
			this._volume += 25;
		}
	Device.prototype.volumeDown = function(){
		if(this._volume <= 25){
			this._volume = 25;
			}
			this._volume-= 25;
		}
	Device.prototype.volumeMute = function(){
			this._volume = 0;
		}
	Device.prototype.getVolume = function(){
			return this._volume;
		}

function Tv() {	
		Device.call(this,0,50);
		
		this._channels = ["1+1","СТБ","Интер","M1"];
		this._channelNumber = 0;
		this._brightness = 50;
		
	}
	
		Tv.prototype = Object.create(Device.prototype);
		Tv.prototype.constructor = Tv;
		
				
		Tv.prototype.increaseBrightness = function(){
			if (this._brightness >= 75){
				this._brightness = 75;
			}
			this._brightness += 25;
		}
		Tv.prototype.decreaseBrightness = function(){
			if(this._brightness <= 25){
				this._brightness = 25;
			}
			this._brightness -= 25;
		}
		Tv.prototype.getBrightness = function(){
			return this._brightness;
		}
		
		Tv.prototype.nextChannel = function(){
			if (this._channelNumber > 2){
				this._channelNumber = -1;
			}
			this._channelNumber++;
		}
		
		Tv.prototype.previousChannel = function() {
			if (this._channelNumber < 1){
				this._channelNumber = 4;
			}
			this._channelNumber--;
		}
		Tv.prototype.getChannel = function(){
			return this._channels[this._channelNumber];
		}
function Radio(){
		Device.call(this,0,50);
		this._stationName = ["Radio Era","BBC","Radio Svoboda"]
		this._stationNumber = 0;
	}		
		Radio.prototype	= Object.create(Device.prototype);
		Radio.prototype.constructor = Radio;
	
		Radio.prototype.nextStation = function(){
			if (this._stationNumber > 1){
				this._stationNumber = -1;
			}
			this._stationNumber++;
		}
		Radio.prototype.previousStation = function(){
			if(this._stationNumber < 1){
				this._stationNumber=3;
			}
			this._stationNumber--;
		}
		Radio.prototype.getStation = function(){
			return this._stationName[this._stationNumber]
		}


var myTv = new Tv();
var myRadio = new Radio();