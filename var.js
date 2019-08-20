"use strict"

function mul(data){
	let sum=0
	

	var result=data.filter(function(option){
                return typeof(option) === "number";
            }).reduce(function(a,b){
                return a+b;
            },0);
return result	
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul1(null, "str", false, true)); //0

/*Задание №4. Функции
Напишите функцию mul(), которая принимает любое количество параметров
разного типа и возвращает произведение параметров типа Number.
Если параметры типа Number отсутствуют, возвращает число 0.
function mul() {
// Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6

console.log(mul(null, "str", false, true)); // 0
Нельзя использовать свойство arguments, но в функцию mul() можно добавить
один параметр.*/