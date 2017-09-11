var pass = chrome.extension.getURL("js/lock.html");


if(document.getElementById("changestateLock") !== null){
	document.getElementById("changestateLock").style.display = "inline";
	document.body.style.overflow = "hidden";
	console.log("Zablokowano");
} 

if(document.getElementById("changestateLock") == null){
	document.body.innerHTML += '<div id="changestateLock"><object type="text/html" data=' + pass + '></object></div>';
	document.body.style.overflow = "hidden";
	console.log("Zablokowano");
}
