"use strict"

var user = {
	name: "Cris",
	surname:"Simons",	
}

console.log(user.name);

user.name="Brain";
console.log(user.name);

delete user.name;
console.log(user.name);

var car ={
	model: "Zaz",
	speed: 160,
	run: function (){
		console.log( car.model + " едет со скоростью " + car.speed);
	},
	
	stop : function (){
		console.log( car.model + " остановилась");
	}
};

car.run();
car.stop();

var car = {};

car.model = "Zaz";
car.speed = 160;
car.run = function () {
	console.log( car.model + " едет со скоростью " + car.speed);
};

car.stop = function() {
	console.log( car.model + " остановилась");
};

car.run();
car.stop();

var car = {};

car["model"] = "Zaz";
car["speed"] = 160;
car["run"] = function(){
	console.log(car.model + " едет со скоростью " + car.speed);
}
car["stop"] = function() {
	console.log(car.model + " остановилась");
}
car.run();
car.stop();

var tv = {
	currentChannel : 1,
	nextChannel: function (){
		tv.currentChannel++;
	},
	previousChannel: function () {
		tv.currentChannel--;
	},
	setChannel : function (number){
		tv.currentChannel = number ;
	},
}

console.log(tv.currentChannel);
tv.nextChannel();
console.log(tv.currentChannel);
tv.previousChannel();
console.log(tv.currentChannel);
tv.setChannel(5);
console.log(tv.currentChannel);

var player = {
	currentSong:1,
	volume:10,
	setVolume:function(newVolume){
		if (newVolume <=0) {
			player.volume = 0;
			console.log ("Установлена минимальная громкость  " + player.volume);
		}
		else if (newVolume > 100){
			player.volume = 100;
			console.log ("Установлена максимальная громкость " + player.volume);
			
		}
		else {  player.volume= newVolume;
		console.log ("Громкость " + player.volume);
		}	
	},
	play: function(newSong){
		if (newSong <=0){
			player.currentSong=1;
			console.log("Достигнуто начало плейлиста, трек номер " + player.currentSong + " воспроизводится");
			
		} else if(newSong>0){ 
			player.currentSong = newSong;
			
		console.log("Трек номер " + player.currentSong + " воспроизводится" );
		}
	},
	stop: function(){
		console.log("Трек номер " + player.currentSong + " остановился");
	},
	ff:function(){
		player.currentSong++;
		console.log("Включен следующий трек номер " + player.currentSong);
	},
	rr:function(){
		if(player.currentSong <=1){
			console.log("Достигнуто начало плей-листа. Включен трек номер "+ player.currentSong);
		} else {
			player.currentSong--;
			console.log("Включен предыдущий трек номер " + player.currentSong);
			}
	},
	pause:function() {
		console.log("Трек номер " + player.currentSong + " приостановлен");
	}
	
		
}

player.setVolume(150);
player.setVolume(-12);
player.setVolume(12);
player.play(-1);
player.play(1123);
player.stop();
player.pause();
player.play(127);
player.rr();
player.ff();

var task5 = { people:
[{
	name:"John",
	age:28,
	expirience:1,
	languages:"Java,JavaScript,SQL"
},{
	name:"Bill",
	age:30,
	expirience:5,
	languages:"HTML,CSS,JavaScript"
},{	
	name: ["Mike"],
	age:[32],
	expirience:[4],
	languages:["Python,SQL"]
}]}

console.log(task5.people[0].name + " " + task5.people[0].age);

var task6 = {
	name: true,
	surname: false,
	age:true
	}

function isEmpty(obj){
	for( var key in obj){
		if (obj[key] == false){
			return console.log("One of the object is false");
			break;
		}
	}
}
isEmpty(task6);

/*var salaries = {
John: 100,
Bill: 300,
Mike: 250
};*/
var salaries = {
	Cris: 150,
	Brain: 600,
	John: 300,
	Steve: 400,
	Bill: 50
};

var result=0;
var size=Object.keys(salaries).length;

for (var key in salaries){
	result+=salaries[key];

}
result=result/size;
console.log(result);

