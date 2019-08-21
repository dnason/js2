"use strict"

function Device(){
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
			this._volume +=25;
			
			if (this._volume > 100){
				this._volume = 100;
			}
		}
	Device.prototype.volumeDown = function(){
			this._volume -=25;	
			
			if (this._volume <= 0){
			this._volume = 0;
			}
		}
	Device.prototype.volumeMute = function(){
			this._volume = 0;
		}
	Device.prototype.getVolume = function(){
			return this._volume;
		}

function Tv() {	
		Device.call(this);
		
		this._channels = ["1+1","СТБ","Интер","M1"];
		this._channelNumber = 0;
		this._brightness = 50;		
	}	
		Tv.prototype = Object.create(Device.prototype);
		Tv.prototype.constructor = Tv;
				
		Tv.prototype.increaseBrightness = function(){
				this._brightness += 25;
				if (this._brightness >100){
					this._brightness = 100;
			}
		}
		Tv.prototype.decreaseBrightness = function(){
				this._brightness -= 25;
				if (this._brightness < 0){
					this._brightness = 0;
			}
		}
		Tv.prototype.getBrightness = function(){
			return this._brightness;
		}
		
		Tv.prototype.nextChannel = function(){
				this._channelNumber++;
				if (this._channelNumber > this._channels.length-1){
					this._channelNumber = 0;
			}
		}
		
		Tv.prototype.previousChannel = function() {
				this._channelNumber--;
				
					if (this._channels < 0){
						this._channelNumber = this._channels.length-1;
			}
		}
		Tv.prototype.getChannel = function(){
			return this._channels[this._channelNumber];
		}
function Radio(){
		Device.call(this);
		this._stationName = ["Radio Era","BBC","Radio Svoboda"]
		this._stationNumber = 0;
	}		
		Radio.prototype	= Object.create(Device.prototype);
		Radio.prototype.constructor = Radio;
	
		Radio.prototype.nextStation = function(){
				this._stationNumber++;
				
			if (this._stationNumber > this._stationName.length-1){
				this._stationNumber = 0;
			}
		}
		Radio.prototype.previousStation = function(){
				this._stationNumber--;
				
			if (this._stationNumber < 0){
				this._stationNumber=this._stationName.length-1;
			}
		}
		Radio.prototype.getStation = function(){
			return this._stationName[this._stationNumber]
		}


var myTv = new Tv();
var myRadio = new Radio();
