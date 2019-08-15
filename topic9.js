"use strict"
var arr = [1,2,3,4]

function sumSliceArray(arr,first,second){
	if (first <0 || first>arr.length){
			throw new Error("Invalid first`s value");
		}
	if (second <0 || second>arr.length){
			throw new Error("Invalid second`s value");
		}
	if ((first=== null) || (second === null)){
				throw ("There is null!")
	}
	if (isNaN((arr[first]+arr[second]))){
			throw("Вах какие буквы в условии!")
		}
		return console.log(arr[first]+arr[second]);
	try {
		
		
		if (first > arr.length && second >arr.length) {
				throw ("First & Second higher than array size");
		}
		if (first > arr.length){
			throw ("First higher than array size");}
		
		if (first <	0){
				throw ("First is less then 0");
			}			
		if (second > arr.length){
				throw ("Second higher than array size");
			}
		if (second <0){
				throw ("Second is less then 0");
			}
		if ((first=== null) || (second === null)){
				throw ("There is null!")
		}
		if (isNaN((arr[first]+arr[second]))){
			throw("Вах какие буквы в условии!")
		}
		
		
	}	
	catch(err) {
		console.log(err);
		
}
}

sumSliceArray(arr,1,0)

function random(min,max,delay,callback){
	var data,error;
	if (min <max) {
		data =  Math.floor(Math.random(min,max) * (max - min) + min);
		error =null;
	}
	if (min > max) {
		error = new Error("Invalid parameters");
	}
	
	setTimeout(function() {
		callback(error,data);
		},delay)
}

random(1,100,2000,function(error,data){
	if (error) {
		throw error;
	}
	console.log(data);
})

random(1000,10,3000,function(error,data){
	if (error) {
		throw error;
	}
	console.log(data);
})
