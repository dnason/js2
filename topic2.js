var a=5;
console.log("My square size: " + a*a);

var source = 57,result;
console.log("Source digit :" + source + " First digit :" + (source-source%10) / 10 + " Second digit :" + source % 10 );

var a = 3, b= 3;
console.log(a >2 && b<=3);

var c=5;
console.log( a < b && b< c);

var z=123	;
console.log((z%2 != 0) && (z/100 > 1));

var x = 1;
var y = 2;

var res1 = String(x) +  String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = Boolean(x) + String(y);// Допишите код, необходимо использовать переменные x и y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = x<y;// Допишите код, необходимо использовать переменные x и y
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = "var" / x + y ;// Допишите код, необходимо использовать переменные x и y
console.log(res4); // NaN
console.log(typeof res4); // "number"

var arr = [];
arr[0] = 1;
arr[1] = "Hi!";
arr[2] = true;
arr[3] = null;

console.log (arr.length);

arr[5] = prompt('Enter your data:','zero');

console.log(arr[5]);