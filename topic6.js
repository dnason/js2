"use strict"
var calculator = {
	a:0,
	b:0,
	
	read : function() {
		this.a = Number(prompt("Enter a=","1"));
		this.b = Number(prompt("Enter b=","2"));
	},
	
	sum : function() {
		return this.a+ this.b;
	},
	
	mul : function() {
		return this.a*this.b;
	}	
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());