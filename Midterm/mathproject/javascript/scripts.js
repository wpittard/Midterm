var j;
var y;
var z;
var temp;
function squareNumber(x) {
	j = Math.pow(x,2);
document.getElementById("one").innerHTML = "The result of squaring the number 3 is [ " + j + " ]";
	console.log(j);
}
function halfNumber(x) {
	j = (x/2);
	document.getElementById("two").innerHTML = "Half of 5 is [ " + j + " ]";
	console.log(j);
}
function percentOf(x,y) {
	j = (x/y)*100;
	document.getElementById("three").innerHTML = x + " is " + j + "% of " + y;
	console.log(j);
}
function areaOfCircle(x) {
	j = Math.PI * x * x;
	j = Math.round(j*100)/100;
	document.getElementById("four").innerHTML = "The area for a circle with radius " + x + " is " + j;
	console.log(j);
}
function multiple(x) {
	j = x/2;
	y = Math.pow(j,2);
	z = Math.PI * y * y;
	temp = (z/y) * 100;
	temp = Math.round(temp*100)/100;
	document.getElementById("five").innerHTML = "Doing some math, we get [ " + temp + " ]";
	console.log(temp);
}