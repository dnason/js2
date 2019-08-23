"use strict"

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
	console.log(x); // &quot;Tom&quot;
	console.log(y); // &quot;Sam&quot;
	console.log(z); // [Bob]
	
function task2(){
	let names = {
		first: "Tom",
		second: "Sam",
		third: "Ray",
		fourth: "Bob"
};

let {first:f,abc:a,third:x,tmp:z,fifth = "Name №5"} = names;
	console.log(f); //"Tom"
	console.log(x); // "Ray"
	console.log(fifth); // "Name №5"
}
task2();

function task3(){
	let data = {
		names: ["Sam", "Tom", "Ray", "Bob"],
		ages: [20, 24, 22, 26],
};
let {names:[name1, name2 ,name3, name4], ages:[age1,age2,age3,age4]} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
}
task3();


function mul() {
	
	var data = Array.prototype.slice.call(arguments);
	let sum=0;
		
	data.forEach(function(value) {
		if (typeof(value) === "number"){
			sum+=value;
			}
	}	
)
return sum;
	
}
function mul1(){
	let data = Array.prototype.slice.call(arguments);
	let sum=0
	

	var result=data.filter(function(option){
                return typeof(option) === "number";
            }).reduce(function(a,b){
                return a+b;
            },0);
return result	
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul1(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); //0

let obj = {
	name: "obj",
	print: function () {
		return () => console.log(this.name);
		}
	};
function multiCaller(func, count) {
	for (let i = 0; i < count; i++) {
		func();
		}
	}
multiCaller(obj.print(), 3);

let names = {
first: "Tom",
second: "Sam",
third: "Ray"
};
console.log(`Первый: -${names.first}-, Второй - "${names.second}", Третий => '${names.	third}`);

function format(s, ...v) {
	res1 
}
let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет"
console.log(res2);
let res3 = format`left${"<->"}right`; // "right"<->"left"
console.log(res3);