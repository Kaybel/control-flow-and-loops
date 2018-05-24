window.onload = function () {
/*botones*/
const btn = document.getElementById('btn')
const btnIf = document.getElementById('btn-if')
const btnSwitch = document.getElementById('btn-switch')
const btnWhile = document.getElementById('btn-while')
const btnDowhile = document.getElementById('btn-dowhile')
const btnFor = document.getElementById('btn-for')

/* 
btn.addEventListener("click", function(){
	alert("hola");
})

//Ejemplo IF

btnIf.addEventListener("click", function(){
	let age = 20;
})
	if(age > 18 && <30){
		console.log("Demasia juventud en tu vida");
	} else if (age > 30){
		console.log("Nada que decir")
	} else {
		console.log("Demasiado bebé")
	}
	});

const mensajeUno ="a";
const mensajeDos = "b";
const mensajeTres = "c";

if(age >=18 && age <=30){
	return console.log("mensajeUno");
}
if (age >30) {
	return console.log("mensajeDos);
}
	return console.log("mensajeTres"); 
});
}

// Ejemplo SWITCH

btnSwitch.addEventListener("click", function(){
let num = "5";
switch(num){
	case "5":
	alert ("este es un string");
	break;
	case 5:
	alert ("este es un numero");
	break;
	default:
	alert("chao, no es string ni numero");
}
});

// ejemplo WHILE

btnWhile.addEventListener("click", function(){
	let counter = 0;
	while (counter <5){
		alert(counter);
		counter++;
})


// Ejemplo DO WHILE
btnDowhile.addEventListener("click", function(){
	let counter = 0;
	do {
		console.log(counter);
	} while (counter!==0)
	});
}
*/ 
/*
// Ejemplo FOR
for (let i =0; i<5; i++) {
	console.log(i);
}
for (let i =6; i>0; i-=2) {
	console.log(i);
}
*/
/*
const nombres = ["Maria", "Alejandra"];
for(let i = 0; i < nombres.length; i++) {
console.log(nombres[i]); 
}
*/
/* 
const btnDoWhile = document.getElementById("btn-dowhile");
btnDowhile.addEventListener("click", function(){
	let counter = 0;
	do {
		console.log(counter);
	} while (counter!==0)
	});
}
*/
// ES5
// Expression
/*
var square = function(num) /* parametro lo que va dentro de parentesis*/ {
/*	return num * num;
}  // si el parametro tiene valor se denomina argumento
// Declaration
function square (num) {
	return num*num;
}
*/ 
//ES6
// const square = (num) => num * num;

const selection = (option) => {
if (option === "cat") {
	alert("miau");
} else if (option === "dog"){
	alert ("guau");
} else {
	alert ("cuack")
}
}