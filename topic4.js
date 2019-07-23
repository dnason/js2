var add = function (x,y){
	console.log( Number(x+y) ) ;
}

add(12,5);

function add(x, y) {
return x + y;
}

function createArrayIterator(array) {
	var i=0;
	return function(){
		return arr[i++];
	}
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

function calcSquareSpace(){
	var squareSpace =0;
	
	function getData(){
		return squareSpace;
	}
	
	function setData(x,y){
		
	if ((typeof x  == "number" )&& (x>0) && (typeof y  == "number") && (y >0)){
		squareSpace = x * y;
	} else {
		console.log("Invalid data");
	}
}
		return[ getData,setData];
}
var z=calcSquareSpace()
z[1](-1,4);
z[0]();