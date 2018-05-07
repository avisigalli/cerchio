function calcoloArea(){
	var r = document.forms.circonferenza.r.value;
	var cerchio = r * r  * Math.PI;
	document.getElementById("area").innerHTML = "Area = " + cerchio + " cm<sup>2</sup>"; 
}
function calcoloCirconferenza(){
	var r = document.forms.circonferenza.r.value;
	var circ = r * 2 * Math.PI;
	document.getElementById("circonferenza").innerHTML = "Circonferenza = " + circ + " cm"; 
}
function annulla(){
	document.getElementById("area").innerHTML = " ";
	document.getElementById("circonferenza").innerHTML = " ";
}
