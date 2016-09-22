//When any section is clicked the 
//output target text should be "You clicked on the {text of the section} section"
var output = document.getElementById("output-target");

function textSelect() {
	//console.log("hi");
	output.innerHTML = "<div>" + "You clicked on the " + "</div>"; 
}

var el = document.getElementsByTagName("section");
//node list
for (var i=0;i<el.length;i++){
    el[i].addEventListener('click', textSelect, false);
//iterate over node list
}

function mouseOverHeader() {
	//console.log("hi there");
	return output.innerHTML = "<div>" + "You moved your mouse over the header" + "</div>";
}
document.getElementById("page-header").addEventListener('mouseover', mouseOverHeader);


function mouseLeaveHeader() {
	//console.log("hi again");
    //var mouseLeave = document.getElementById("page-header");
	return output.innerHTML = "<div>" + "You left me!!" + "</div>";    
}
document.getElementById("page-header").addEventListener('mouseleave', mouseLeaveHeader);

//When you type characters into the input field, 
//the output element should mirror the text in the input field

function inputText (e){
	console.log("here");
	return outputEvent.innerHTML = userInput;

	//var onKeyUp = function(e) {
	//var userInput = document.getElementById('keypress-input').value; 	
};


 //document.getElementById("keypress-input").addEventListener('textInput', inputText);





