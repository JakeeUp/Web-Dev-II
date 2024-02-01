
function disableselect(e){
return false
}
function reEnable(){
return true
}
//if IE4+
document.onselectstart=new Function ("return false")
//if NS6
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}

function fixipad() {
	document.getElementById("ipad").innerHTML='<img id="fixedipad">';
	}
							

function breakipad() {
	document.getElementById("ipad").innerHTML='<img id="brokenipad">';
	}
	
function home() {  /* this function will get you to the verticle ipad homescreen */
	document.getElementById("screen").innerHTML='<img class="ipadhome" src="images/ipad.gif" alt="ipad" title="ipad"><img class="ipadhomescreen" src="images/ipadhome.gif" alt="ipadhome" title="ipadhome"><button class="homebutton2" type="button" onclick="home()"> <img src="images/homebutton.gif"> </button><button class="picturesbutton" type="button" onclick="pictures()"> <img src="images/picturesbutton.gif"> </button> <button class="notepadbutton" type="button" onclick="notepad()"> <img src="images/notepadbutton.gif"> </button><button class="safaributton" type="button" onclick="safari()"> <img src="images/safaributton.gif"> </button><button class="musicbutton" type="button" onclick="music()"> <img src="images/musicbutton.gif"> </button>';
	}
	
function notepad() {  /* this function will get you to the notepad screen on verticle ipad */  /*photo3.gif is the notepad screen */
	document.getElementById("screen").innerHTML='<img class="ipadhome" src="images/ipad.gif" alt="ipad" title="ipad"><img class="photo3" src="images/photo3.gif" alt="notepad" title="notepad"><button class="homebutton2" type="button" onclick="home()"> <img src="images/homebutton.gif"> </button>';
	}	
	
function safari() {  /* this function will get you to the safari screen on verticle ipad */  /*photo1.gif is the safari screen */
	document.getElementById("screen").innerHTML='<img class="ipadhome" src="images/ipad.gif" alt="ipad" title="ipad"><img class="photo1" src="images/photo1.gif" alt="safari" title="safari"><button class="homebutton2" type="button" onclick="home()"> <img src="images/homebutton.gif"> </button>';
	}
	
function music() {  /* this function will get you to the music screen on verticle ipad */  /*photo2.gif is the safari screen */
	document.getElementById("screen").innerHTML='<img class="ipadhome" src="images/ipad.gif" alt="ipad" title="ipad"><img class="photo2" src="images/photo2.gif" alt="music" title="music"><button class="homebutton2" type="button" onclick="home()"> <img src="images/homebutton.gif"> </button>';
	}
function pictures() {    /* this function will get you to the horizontal ipad with pictures of Henry on it */
	document.getElementById("screen").innerHTML='<img class="ipad" src="images/ipad.gif" alt="ipad" title="ipad"><img class="henry" src="images/Henry.gif" alt="Henry" title="animated 134kb gif file of Henry Idar"><button class="homebutton" type="button" onclick="home()"> <img  src="images/homebutton.gif"> </button>';
	}
		
		