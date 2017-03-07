
function executeThisCodeAfterFileLoaded(){
	console.log("it WORKED!!")

}
function executeThisCodeAfterFileFails(){
	console.log("boooo");

}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);