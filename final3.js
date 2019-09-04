"use strict"

class Home{
		constructor(){

			this._address = "myAddress";
			this._devices = [];
		}
		
		set address(name){
			this._address = name;
		}
		
		get address(){
			return this._address;
		}
					
		addDevice(name){
			this._devices.push(name);
		}
	
		getDeviceByName(name){
				let resultIndex = "init";
				this._devices.forEach(function(element,index){
					if ( name === element){
						resultIndex=index;
					}
					else resultIndex =-1;
					}	)
					
					if (resultIndex === -1){
						return null;
						}
					else {
						return  this._devices[resultIndex];
					}
		}

/*		getDeviceByName(name){ 
		for (let i=0; i<this._devices.length;i++){
			if (name === this._devices[i]._name)
				return this._devices[i];
			}
		}*/	
		
		getAllDevices(){
			return this._devices;
		}
		
		
		deleteDeviceByName(name){
				let resultIndex = "init";
				this._devices.forEach(function(element,index){
					if (name === element){
					resultIndex = index;
				}
				})
				
				this._devices.splice(resultIndex,1);
		}
		
/*		deleteDeviceByName(name){
			const result = this._devices.filter((elem) => ( elem._name !== name));
			 this._devices=result;
		}*/
		
/*		deleteDeviceByName(name){
			
			for(let i=0; i< this._devices.length ;i++){
				if (name === this._devices[i]._name)
					this._devices.splice(i,1);
			}
		}	*/
}
const myHome = new Home();


class Device{
	constructor(name){
	
	this._name = name;
	this._status = 0;
	this._volume = 50;	
}

	set name(name) {
		this.name=name;
	}
	get name(){
		return this._name;
	}
	turnOn(){
		this._status = 1;
		}		
	turnOff(){
		this._status = 0;
		}
	get status(){
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
	get volume(){
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
		get brightness(){
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
		get channel(){
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
		get station(){
		return this._stationName[this._stationNumber];
		}
}