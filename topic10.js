"use strict"
function task1(){
	function Rectangle(){
		var x1=1;
		var y1=1;
		var x2=3;
		var y2=3;
		
		Rectangle.prototype.toString = function () {
			return console.log ("Current x1: " + x1 + " Current y1: " + y1 + 
			" Current x2: " + x2 + " Current y2: " + y2);
		}
		Rectangle.prototype.valueOf = function(){
			 return console.log("Perimetr equal: " + (2*((x2-x1)+(y2-y1))));
		}
	}
	var myFigure = new Rectangle();
	myFigure.toString();
	myFigure.valueOf();
}
task1()
//task2
function task2(){
	var sourceString = "Login1,LOgin2,login3,loGin4";
	sourceString = sourceString.toLowerCase();
	var arr=[sourceString.split(",")];
	console.log(arr);
	}
task2()

function task3(){
	var input;
	var data =[];
	var i=0;
	while ( input == "end"){
		data[i] = prompt(input,end)
	}
}
task3();
//task4
function addTwoDays(date){
	var resultDate = new Date(date);
	console.log("Source data: " + resultDate.toDateString());
	resultDate.setDate(resultDate.getDate()+2);
	return console.log("Output data: "+ resultDate.toDateString());
}
addTwoDays('2019.3.5');

function task5(){
	var arr=["Джаз","Блюз"];
	console.log(arr);
	arr.push("Рок-н-ролл");
	console.log(arr);
	arr.splice(arr.length-2,arr.length-2,"Классика")
	console.log(arr);
	arr.splice(0,1);
	console.log(arr);
	arr.unshift("Реп","Регги");
	console.log(arr);
	
		
}
task5();

function task6(){ 

	Array.prototype.sortDesc = function() {
		arr.sort();
		arr.reverse();
	}
	
	var arr = [5, 1, 4, 2, 3];
	arr.sortDesc();
	console.log(arr);
}


task6();

function task7(){
	function deleteEvenNumbers(arr){
		var arrResult=[]
		for (var i=0;i<arr.length;i++){
			if (arr[i] % 2 !== 0){
				arrResult.push(arr[i]);
			}	
		}
		return arrResult;
	}
	var arr = [1,2,3,4,5]
	var arr = deleteEvenNumbers(arr);
	console.log(arr);
}
task7()

function task8(){
	var arr = ["Tom", "Sam", "Bob"];
	var arrLength = [];
	function names(value){
		return "<li>" + value +"</li>";
	}
	console.log(arr.map(names));
}
task8()

function task9(){
	function matrixToArray(matrix) {
		var resultReduce = arr.reduce(function(a, b) {
		return a.concat(b);})
	return resultReduce;	
	}
	var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
	var arr = matrixToArray(arr);
	console.log(arr);
}
task9()