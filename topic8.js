"use strict"

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


//task2
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
	this._perimeter = (this._side *2);
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
Cube.prototype.getPerimeter = function(){
	this._perimeter = (this._side *2)*6;
	return this._perimeter;
}
var cube = new Cube(7);
	console.log("Method I.Redefinition Perimeter :" + cube.getPerimeter());
	console.dir("Method II. Perimeter from square " + square.getPerimeter() + " multiplied: " + square.getPerimeter()*6);
