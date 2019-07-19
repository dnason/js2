var a=-1;
if (a>0) {
	a++;
	console.log(a);
}
else if (a<0) {
	a= a-2;
	console.log(a);
}
else if (a == 0){
	a = 10;
	console.log(a);
}

var b = -3;

if (b == 0){
	console.log('number is zero');
	}
else if ( b > 0 && b%2 ==0 ) {
	console.log('positive even');
	}

else if ( b > 0 && b%2!==0 ){
	console.log('positive odd');
}

else if ( b < 0 && b%2 == 0) {
	console.log('negative even');
} 
else if ( b < 0 && b%2!== 0){
	console.log('negative odd');
}

//task3
var c1 = 3;
var c2 = 1;
var c3 = 1;
var c4 = 1;

if (c1 == c2 == c3 ) {
	console.log('different number 4');
}
else if (c2 == c3 == c4){
	console.log('different number 1');
}
else if (c1 == c3 == c4){
	console.log('different number 2');
}
else if (c1 == c2 == c4) {
	console.log('different number 3')
}

var k=5;

if (k==1){
	console.log("плохо");
}
else if (k==2){
	console.log("неудовлетворительно");
}
else if (k==3){
	console.log("удовлетворительно");
}
else if (k==4){
	console.log("хорошо");
}
else if (k==5){
	console.log("отлично");
}

var c=4, d=9 , j=0;

while (c < d){
	d=d-c;
	j++;
}
console.log("Ответ :" + j + " отрезков");

//task6
var n=654321;

while(n>1){
	var z=n%10;	
	n=(n-z)/10;
	console.log(z);
}

function task7(){
var n=0;

for (a=2, b=10;a <= b; a++)
{
	n=n+a;
}
console.log(n);
}
task7();

function task8(number){
	var sum=1;
	for (var i=2; i<=number; i++){
		sum=sum*i;
	}
	console.log(sum);
}
task8(5);

function summArray(data){
	var summ=0;
	for (i=0; i < data.length; i++){
		summ += data[i];
	}
	console.log(Number(summ));
}
function task9(){
	var data =[];
	var i=0;
	var value = true;
	
	while (value){

		var number = prompt("Enter number:", "0");
		if (isNaN(parseFloat(number)) && !null)
		{ break;}
		data[i] = Number(number); 
		i++;
	}
		
		console.log(data);
		summArray(data);	
}
task9();

function task10(){
var a=5;
var b=10;

for(var i = a; i <= b; i++){
    var res = '';
    
	for(var j = i - a; j >= 0; j--){
        res += i;
    console.log(res);
	}
	}
}
task10();


function task11(x,n){
	var answer=x;

	for (var i = 1; i < n; i++) {
    answer *= x;
	}

  return console.log(answer);
}
task11(2,4)

function task12(x,y){
	if (x<y) {
		console.log("Minimal is: x=" + x);
	} else if (x>y){
		console.log("Minimal is: y=" + y);
	}
	else {
		console.log("x = " + x + " and y= " + y + " is equal");
	}
}
task12(2,1);

function task13(x){
	if (x<0) {
		console.log("-1");
	}else if (x == 0){
		console.log("0");
	} else {
		console.log("1");
	}
}
task13(3);

function task14(a,b,op){
	if (op == 1){
		console.log(a-b);
	} else if( op == 2){
		console.log(a*b);
	} else if( op == 3){
		console.log(a/b);
	} else {console.log(a+b);}
}
task14(3,6,10);

function task15(k,n){
	var z=Number(k);
	
	for( var i=1; i<n; i++)
		{z /= 10;
	}
	console.log(z);
	if (z==0)
	{ console.log ("-1");}
  else return z%10;
console.log(z)
}

task15(1234,4);//???