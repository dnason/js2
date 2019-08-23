"use strict"

class Home{
		constructor(){
			this._address = address;
			this._devices = [];
		}
		getAddress(){
			return this._address;
		}
		setAddress(value){
			this._address = value;
		} 
			
		addDevice(name){
			this._devices.push(name);
		}
		getAllDevice(){
			console.log(this._devices);
		}
		deleteDeviceByName(name){
			this._devices.delete(name);
		}
}

function Device(){
	this._name = name;
	this._status = 0;
	this._volume = 50;	
}
	Device.prototype.setName = function(value){
		this._name=value;
	}
	Device.prototype.getName = function(){
		return this._name;
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
			if (this._volume != 100){
				this._volume +=25;
			}
		}
	Device.prototype.volumeDown = function(){			
			if (this._volume != 0){
				this._volume -=25;
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
				if (this._brightness !=100){
					this._brightness += 25;
			}
		}
		Tv.prototype.decreaseBrightness = function(){
				
				if (this._brightness != 0){
					this._brightness -= 25;;
			}
		}
		Tv.prototype.getBrightness = function(){
			return this._brightness;
		}
		Tv.prototype.nextChannel = function(){
			if (this._channelNumber == this._channels.length-1){
				this._channelNumber = 0;
			}	else {
				this._channelNumber++;
			}
		}
		Tv.prototype.previousChannel = function() {
			if (this._channelNumber == 0){
				this._channelNumber = this._channels.length-1;
			} else {
				this._channelNumber--;
			}
		}
		Tv.prototype.getChannel = function(){
			return this._channels[this._channelNumber];
		}
	
class Radio extends Device{
		constructor(){
			super();
			this._stationName = ["Radio Era","BBC","Radio Svoboda"];
			this._stationNumber = 0;
		}
		
		nextStation(){
			if(this._stationNumber == this._stationName.length-1){
				this._stationNumber= 0;
			} else {
				this._stationNumber++;
			}
		}
		previousStation(){
			if (this._stationNumber == 0){
				this._stationNumber=this._stationName.length-1;
			} else{
				this._stationNumber--;
			}
		}
		getStation(){
		return this._stationName[this._stationNumber];
		}
}
var myTv = new Tv();
var myRadio = new Radio();