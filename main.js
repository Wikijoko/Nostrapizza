let menuDeslizables = document.querySelectorAll("#entradas");
let menu = document.getElementById("menuEntradas");

	function menu1() {
		document.getElementById("menuEntradas").style.left= "0px";
		document.getElementById("entradas").style.display= "none";
	}

	function devolver() {
		document.getElementById("menuEntradas").style.left= "-100%";
		document.getElementById("menuSaladas").style.left= "-100%";
		document.getElementById("menuPizzas").style.left= "-100%";
		document.getElementById("menuSobremesas").style.left= "-100%";
		document.getElementById("menuBebidas").style.left= "-100%";
		document.getElementById("entradas").style.display= "flex";
	}

	function menu2 () {
		document.getElementById("menuSaladas").style.left= "0px";
		document.getElementById("entradas").style.display= "none"
	}
	function menu3 () {
		document.getElementById("menuPizzas").style.left= "0px";
		document.getElementById("entradas").style.display="none"
	}
	function menu4 () {
		document.getElementById("menuSobremesas").style.left= "0px";
		document.getElementById("entradas").style.display="none"
	}
	function menu5 (){
		document.getElementById("menuBebidas").style.left= "0px";
		document.getElementById("entradas").style.display="none"
	}