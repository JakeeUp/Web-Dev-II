function doFirst(){
	JDeppPic = document.getElementById('JDepp');
	JDeppPic.addEventListener("dragstart", JDstartDrag, false);
	JDeppPic.addEventListener("dragend", JDendDrag, false);
	
	LNeesonPic = document.getElementById('LNeeson');
	LNeesonPic.addEventListener("dragstart", LNstartDrag, false);
	LNeesonPic.addEventListener("dragend", LNendDrag, false);
	
	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener("dragenter", JDdragenter, false);
	leftbox.addEventListener("dragleave", JDdragleave, false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", JDdropped, false);
	
	middleboxbox = document.getElementById('middlebox');
	middleboxbox.addEventListener("dragenter", LNdragenter, false);
	middleboxbox.addEventListener("dragleave", LNdragleave, false);
	middleboxbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	middleboxbox.addEventListener("drop", LNdropped, false);
}

/***** 5 functions for Johnny Depp *****/

function JDstartDrag(e){
	var JDeppCode='<img src="images/JDepp.jpg" width="150">';
	e.dataTransfer.setData('Text', JDeppCode);
}

function JDendDrag(e){
	JDpic=e.target;
	JDpic.style.visibility='hidden';
}

function JDdragenter(e){
	e.preventDefault();
	leftbox.style.background="lightgrey";
	leftbox.style.border="3px solid green";
}

function JDdragleave(e){
	e.preventDefault();
	leftbox.style.background="white";
	leftbox.style.border="3px solid black";
}

function JDdropped(e){
	e.preventDefault();
	leftbox.style.background="white";
	leftbox.style.border="3px solid black";
	leftbox.innerHTML=e.dataTransfer.getData('Text');
}

/*****5 functions for Liam Neeson *****/
 
function LNstartDrag(e){
	var LNeesonCode='<img src="images/LNeeson.jpg" width="150">';
	e.dataTransfer.setData('Text', LNeesonCode);
}

function LNendDrag(e){
	LNpic=e.target;
	LNpic.style.visibility='hidden';
}

function LNdragenter(e){
	e.preventDefault();
	middlebox.style.background="lightgrey";
	middlebox.style.border="3px solid green";
}

function LNdragleave(e){
	e.preventDefault();
	middlebox.style.background="white";
	middlebox.style.border="3px solid black";
}

function LNdropped(e){
	e.preventDefault();
	middlebox.style.background="white";
	middlebox.style.border="3px solid black";
	middleboxbox.innerHTML=e.dataTransfer.getData('Text');
}


window.addEventListener("load", doFirst, false);
