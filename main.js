console.log("First line in js file: ", Date.now());

var dinoContainer = document.getElementById("dinoContainer");{

function makeDom(xrhData){
	var dinosaurString = "";
	var currentDinosaur;
 for(var i=0; i<xhrData.dinosaurs.lenth; i++);
 	currentDinosaur = xhrData.dinosaurs[i];

  dinosaurString += `<div class="col-sm-6 col-md-4">`;
  dinosaurString += `<div class="thumbnail">`;
  dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`;
  dinosaurString += `<div class="caption">`;
  dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
  dinosaurString += `<p>is a ${currentDinosaur.type}</p>`;
  dinosaurString += `<p>likes to eat${currentDinosaur.food}</p>`;
  dinosaurString += `</div></div></div>`;

dinoContainer.innerHTML = dinosaurString;

}
}


function executeThisCodeAfterFileLoaded(){
	
	var data = JSON.parse(this.responseText);
	makeDOM(data);
}
function executeThisCodeAfterFileFails(){


}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();


console.log("last line in js file: ", Date.now());