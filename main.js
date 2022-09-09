let menuDeslizables = document.querySelectorAll("#entradas");
let menu = document.getElementById("menuEntradas");

	function menu1() {
		document.getElementById("menuEntradas").style.left= "0px";
		document.getElementById("entradas").style.display= "none";
	}

	function devolver() {
		document.getElementById("menuEntradas").style.left= "-100%";
		document.getElementById("entradas").style.display= "flex"
	}
