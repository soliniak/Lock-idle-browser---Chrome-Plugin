window.onkeydown = function (e) {
	e = e || event;
    var keyCode = e.keyCode,
    letter = (String.fromCharCode(e.keyCode) || '').toLowerCase();

	   	if (e.ctrlKey && 'q' === letter)
	    {
			chrome.runtime.sendMessage({lock: "yes_key"}, function(response) {
	  		console.log(response.farewell);
	  		clearTimeout(t);
			});
    	}
}

var c = 0;
var t;
var czas = 30;

function timer() {
if(c > czas){
	clearTimeout(t);
	}else{
		c = c + 1;
	    t = setTimeout(function(){ timer() }, 1000);
	    if(c > czas){
			chrome.runtime.sendMessage({lock: "yes"}, function(response) {
	  		console.log(response.farewell);
			});
		}
	}
	console.log(c);
}

	document.addEventListener("mousemove", function(){
		c = 0;
	});

timer();
