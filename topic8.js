"use strict"

//task1
function Shape1(centerX,centerY){
	var _centerX = centerX;
	var _centerY= centerY;
	
	this.getCenterX = function(){
		return this._centerX;
	}
	this.setCenterX = function(value){
		this._centerX = value;
	}
	this.getCenterY = function(){
		return this._centerY;
	}
	this.setCenterY = function(value){
		this._centerY = value;
	}
	
	this.info = function(){
		console.log("CenterX: " + this.getCenterX + "CenterY: " + this.getCenterY)
	}
}
function Rectangle1(centerX,centerY){
	
	Shape1.call(this,centerX,centerY);
	var _diagonal;
	
	this.getDiagonal = function(){
		return this._diagonal;
	}
	this.setDiagonal = function(value){
		this._diagonal = value;
	}
	
	this.info = function(){
		console.log("Recangle1. CenterX: " + this._centerX + " CenterY: " + this._centerY + " Diagonal: " + this._diagonal);
	}
}

function Circle1(centerX,centerY){
	
	Shape1.call(this,centerX,centerY);
	var _radius;
	
	this.getRadius = function() {
		return this._radius;
	}
	this.setRadius = function(value) {
		this._radius = value;
	}
	
	this.info = function() {
		console.log("Circle1. CenterX: " + this._centerX + " CenterY: " + this._centerY + " Radius: " + this._radius);
	}
}

	var rectangle1 = new  Rectangle1();
	rectangle1.setCenterX(31);
	rectangle1.setCenterY(32);
	rectangle1.setDiagonal(33);
	rectangle1.info();
	
	var circle1 = new Circle1();
	circle1.setCenterX(3);
	circle1.setCenterY(4);
	circle1.setRadius(5);
	circle1.info();
	
//task2

function Square2(side){
	this._side = side;
	var _perimeter;

	this.getSide = function() {
	return this._side;
	}
	this.setSide = function(value){
	this._side = value;
	}
	this.getPerimeter = function(){
	this._perimeter = (this._side *4);
	return this._perimeter;
	}
}
function Cube2methodI(side){
	 Square2.call(this,side);
	 var _perimeter;
}	 

function Cube2methodII(side){
	Square2.call(this,side)
	var _perimeter;
	
	var parentGetPerimeter = this.getPerimeter;
	this.getPerimeter = function () {
		parentGetPerimeter.call(this);
		this._perimeter = this._perimeter* 6;
		return this._perimeter;
	}
}

var square2 = new Square2();
	square2.setSide(20);
	console.log("Square_2_Perimeter: " + square2.getPerimeter());
	
var cube2 = new Cube2methodI();
	cube2.setSide(20);
	console.log("Cube_2_Perimeter_MethodI: " + cube2.getPerimeter()*6);
	
var cube3 = new Cube2methodII();
	cube3.setSide(20);
	console.log("Cube_2_Perimeter_MethodII: " + cube3.getPerimeter());

//task3

function mp3(name,year) {
  
  this.name = name;
  this.year = year;

}
var mp3Mike = new mp3('Jackson',1988);

	console.log(mp3Mike);

//task4.Functional
function Shape(centerX,centerY) {
	this._centerX = centerX;
	this._centerY = centerY;
}

Shape.prototype.setCenterX = function (value) {
	this._centerX = value;
}
Shape.prototype.setCenterY = function (value) {
	this._centerY = value;
}
Shape.prototype.getCenterX = function () {
	return this._centerX;
}
Shape.prototype.getCenterY = function () {
	return this._centerY;
}
Shape.prototype.info = function () {
	return console.log ("CenterX: " + this._centerX + " CenterY: " + this._centerY);
}


function Circle(centerX,centerY,radius){
	Shape.call(this,centerX,centerY);
	this._radius=radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor =  Shape;

Circle.prototype.setRadius = function (value) {
	this._radius = value;
}
Circle.prototype.getRadius = function () {
	return this._radius;
}
Circle.prototype.info = function () {
	return console.log ("CenterX: " + this._centerX + " CenterY: " + this._centerY + " Radius: " + this._radius);
}


function Rectangle(centerX,centerY,diagonal){
	Shape.call(this,centerX,centerY);
	this._diagonal=diagonal;
	}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor =  Shape;	

Rectangle.prototype.getDiagonal = function (){
	return this._diagonal;
}

Rectangle.prototype.setDiagonal = function(value) {
	this._diagonal = value;
}
Rectangle.prototype.info = function(){
	return console.log ("CenterX: " + this._centerX + " CenterY: " + this._centerY + " Diagonal: " + this._diagonal );
}


var circle = new Circle(40,50,10)
circle.info();

var rectangle = new Rectangle(50,50,150);
rectangle.info();

	
//task5
function Square(side){
	this._side = side;
	this._perimeter;

}
Square.prototype.getSide = function() {
	return this._side;
}
Square.prototype.setSide = function(value){
	this._side = value;
}
Square.prototype.getPerimeter = function(){
	this._perimeter = (this._side *4);
	return this._perimeter;
}

var square = new Square (7);
	console.log("Perimeter " + square.getPerimeter());
	
function Cube(side){
	Square.bind(this,side)
	this._side = side;
	this._perimeter;
	}

	Cube.prototype = Object.create(Square.prototype);
	Cube.prototype.constructor = Square;

	Cube.prototype.getSide = function() {
		return this._side;
	}
	Cube.prototype.setSide = function(value){
	this._side = value;
	}
	
	var parentGetPerimeter= this.getPerimeter;
	
	this.getPerimeter = function() { 
		return parentGetPerimeter.call(this)*6*4;	  
    }
	
	Cube.prototype.getPerimeter = function(){
	this._perimeter = (this._side *4)*6;
		return this._perimeter;
}

var cube = new Cube();
	cube.setSide(8)
	
	console.log("Method I. Perimeter from square " + square.getPerimeter() + " multiplied: " + square.getPerimeter()*6);
	console.log("Method II.Redefinition Perimeter :" + cube.getPerimeter());