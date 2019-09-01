"use strict"

class Home{
		constructor(){

			this._address = "myAddress";
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
		
		getDeviceByName(name){ 
		for (let i=0; i<this._devices.length;i++){
			if (name === this._devices[i]._name)
				return this._devices[i];
			}
		}	
		
		getAllDevices(){
			return this._devices;
		}
		
		deleteDeviceByName(name){
			
			for(let i=0; i< this._devices.length ;i++){
				if (name === this._devices[i]._name)
					this._devices.splice(i,1);
			}
		}	
}
const myHome = new Home();


class Device{
	constructor(name){
	
	this._name = name;
	this._status = 0;
	this._volume = 50;	
}

	setName(name) {
		this.name=name;
	}
	getName(){
		return this._name;
	}
	turnOn(){
		this._status = 1;
		}		
	turnOff(){
		this._status = 0;
		}
	getStatus(){
		return this._status;
		}
	volumeUp(){			
		if (this._volume != 100){
			this._volume +=25;
			}
		}
	volumeDown(){			
		if (this._volume != 0){
			this._volume -=25;
			}
		}
	volumeMute(){
		this._volume = 0;
		}
	getVolume(){
		return this._volume;
		}
}
class Tv extends Device{	
		constructor(name){
			super(name);
			this._channels = ["1+1","СТБ","Интер","M1"];
			this._channelNumber = 0;
			this._brightness = 50;		
		}	
				
		increaseBrightness(){				
				if (this._brightness !=100){
					this._brightness += 25;
			}
		}
		decreaseBrightness(){				
				if (this._brightness != 0){
					this._brightness -= 25;;
			}
		}
		getBrightness(){
			return this._brightness;
		}
		nextChannel(){
			if (this._channelNumber == this._channels.length-1){
				this._channelNumber = 0;
			}	else {
				this._channelNumber++;
			}
		}
		previousChannel(){
			if (this._channelNumber == 0){
				this._channelNumber = this._channels.length-1;
			} else {
				this._channelNumber--;
			}
		}
		getChannel(){
			return this._channels[this._channelNumber];
		}
}	
class Radio extends Device{
		constructor(name){

			super(name);
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