"use strict"
var arr = [1,2,3,4]

function sumSliceArray(arr,first,second){
	if (first <0 || first>arr.length){
		console.log(first)
		
		while ( first >=0 && first<arr.length ){
		
		first = Number(prompt("Please,reenter first(0-" + arr.length + ")", 1));
		}
	}
}
sumSliceArray(arr,-11,3)