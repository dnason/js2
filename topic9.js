"use strict"
var arr = [1,2,3,4]

function sumSliceArray(arr,first,second){
	
			
	return arr[first]+arr[second];
}
		
	try {
		
		
		console.log(sumSliceArray(arr,5,2));
		if (first > arr.length){
				throw new Error("Wrong number");
			}	
	
		
	}	
	catch {
		console.log("Wrong input data");
	}
	
	