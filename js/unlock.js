if(document.getElementById("changestateLock") !== null){
	if(document.getElementById("changestateLock").style.display !== "none"){
		document.getElementById("changestateLock").remove();
		document.body.style.overflow = "visible";
		//window.location.reload();
		console.log("Odblokowano");
	}
}

