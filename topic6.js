"use strict"
var calculator = {
	a:0,
	b:0,
	
	read : function() {
		this.a = Number(prompt("Enter a=","1"));
		this.b = Number(prompt("Enter b=","2"));
	},
	
	sum : function() {
		return this.a+ this.b;
	},
	
	mul : function() {
		return this.a*this.b;
	}	
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


function player(currentSong, volume){
	

return {

	setVolume:function(newVolume){
		if (newVolume <=0) {
			volume = 0;
			console.log ("Установлена минимальная громкость  " + this.volume);
		}
		else if (newVolume > 100){
			volume = 100;
			console.log ("Установлена максимальная громкость " + this.volume);
			
		}
		else {  this.volume= newVolume;
		console.log ("Громкость " + this.volume);
		}	
	},
	play: function(newSong){
		if (newSong <=0){
			this.currentSong=1;
			console.log("Достигнуто начало плейлиста, трек номер " + this.currentSong + " воспроизводится");
			
		} else if(newSong>0){ 
			this.currentSong = newSong;
			
		console.log("Трек номер " + this.currentSong + " воспроизводится" );
		}
	},
	stop: function(){
		console.log("Трек номер " + this.currentSong + " остановился");
	},
	ff:function(){
		currentSong++;
		console.log("Включен следующий трек номер " + this.currentSong);
	},
	rr:function(){
		if(this.currentSong <=1){
			console.log("Достигнуто начало плей-листа. Включен трек номер "+ this.currentSong);
		} else {
			this.currentSong--;
			console.log("Включен предыдущий трек номер " + this.currentSong);
			}
	},
	pause:function() {
		console.log("Трек номер " + this.currentSong + " приостановлен");
	}
	}

}

var play = player(12,150);


play.setVolume(150);
play.setVolume(-12);
play.setVolume(12);
play.play(-1);
play.play(1123);
play.stop();
play.pause();
play.play(127);
play.rr();
play.ff();




var salaries = {
John: 100,
Bill: 300,
Mike: 250
};

/*var salaries = {
Cris: 150,
Brain: 600,
John: 300,
Steve: 400,
Bill: 50
};*/

var maxSallary=0;

for (var keys in salaries){
	if (salaries[keys] >= maxSallary){
		
		 maxSallary = salaries[keys];
		}
}
console.log ("Самая большая зарплата " + maxSallary);

function playerNext(currentSong, volume){
	this.currentSong=currentSong,
	this.volume=volume,
	

	this.setVolume = function(newVolume){
		this.newVolume=newVolume;
		if (newVolume <=0) {
			this.volume = 0;
			console.log ("Установлена минимальная громкость  " + this.volume);
		}
		else if (newVolume > 100){
			this.volume = 100;
			console.log ("Установлена максимальная громкость " + this.volume);
			
		}
		else {  this.volume= newVolume;
		console.log ("Громкость " + this.volume);
		}	
	},
	this.play= function(newSong){
		if (newSong <=0){
			this.currentSong=1;
			console.log("Достигнуто начало плейлиста, трек номер " + this.currentSong + " воспроизводится");
			
		} else if(newSong>0){ 
			this.currentSong = newSong;
			
		console.log("Трек номер " + this.currentSong + " воспроизводится" );
		}
	},
	this.stop= function(){
		console.log("Трек номер " + this.currentSong + " остановился");
	},
	this.ff=function(){
		this.currentSong++;
		console.log("Включен следующий трек номер " + this.currentSong);
	},
	this.rr=function(){
		if(this.currentSong <=1){
			console.log("Достигнуто начало плей-листа. Включен трек номер "+ this.currentSong);
		} else {
			this.currentSong--;
			console.log("Включен предыдущий трек номер " + this.currentSong);
			}
	},
	this.pause=function() {
		console.log("Трек номер " + this.currentSong + " приостановлен");
	}
}

var playerNew = new playerNext();

playerNew.setVolume(150);
playerNew.setVolume(-12);
playerNew.setVolume(12);
playerNew.play(-1);
playerNew.play(1123);
playerNew.stop();
playerNew.pause();
playerNew.play(127);
playerNew.rr();
playerNew.ff();

function mul() {
	var result=1;
	var count=0;
	
	for (var i=0; i<arguments.length;i++){
		if(typeof(arguments[i]) === "number"){
			result *=arguments[i];
			count++;			
		}
	if (count == 0){
		return 0;
		}
	}
	return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); //0


var country = {
		name: "Украина",
		language: "украинский",

			capital: {
				name: "Киев",
				population: 2907817,
				area: 847.66
			}
};

function format(beginMsg, endMsg) {
console.log(beginMsg + this.name + endMsg);
}
format.call(country,"<",">"); // &quot;&lt;Украина&gt;&quot;
format.apply(country,["[","]"]); // &quot;[Украина]&quot;
format.call(country.capital,"\"","\""); // &quot;&quot;Киев&quot;&quot;
format.apply(country.capital,["",""]); // &quot;Киев&quot;