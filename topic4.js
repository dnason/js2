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

function digitSumm(k){ 
if (k>0){
k=k%10+digitSumm(Math.floor(k/10));}
	return k;
}


var zz = digitSumm(12);
console.log(zz);

function format(data, type) {
		if (type == "number") {
			format=function(){
			return Number(data);
			}
		}
		else if(type == "boolean"){
			format = function(){
				return Boolean(data);
			}
		}
		else if(type == "string"){
			format = function(){
				return String(data);
			}
		}
		else return data;
} 

var originFormat = format;

format("1","number");
console.log(format()); // 1
console.log(typeof format()); //"number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"