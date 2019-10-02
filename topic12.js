function createPromiseRandom(min, max, delay) {
   return new Promise(function (resolve, reject) {
	 	
		setTimeout(
			() => {
			let result;
				if (min < max) {
					result = Math.floor(Math.random() * (max - min) + min);
				
				return resolve(result)}
				
				else {
					result = new Error("min>max")
					reject(result)
				}
			
			},delay);  
	
})}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then( function (fullfield){
	console.log(fullfield);
} );
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then( function (fullfield){
	console.log(fullfield);
});

function start() {
	return new Promise(function (resolve, reject) {
	let input = prompt ("Enter the number,pls",0)
	
	console.log("start " + typeof input + " " + Number.isInteger(input))
	if (/^[а-яё]+ [а-яё]+ [а-яё]+$/i.test(input)) {
		return resolve(input)}
	else {return reject(input)}
   // Запрашиваем у пользователя число number при помощи prompt()
   // Если пользователь ввел не число - вызвать reject()
   // Если пользователь ввел число - вызвать resolve(number)
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
      // Запрашиваем у пользователя число number, пока он его не введет
      // После ввода числа - вызвать resolve(number)
   });
}).then(function (result) {
   console.log(result + " zxc")// Вывод number на экран
});}
start()