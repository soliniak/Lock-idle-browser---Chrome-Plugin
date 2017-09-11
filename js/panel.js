$(function(){
    $('#lock_all').click(function(){
		chrome.tabs.query({}, function(tabs){
	  		for (var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, 
				{ 
				file: 'js/lock.js' 
		        }, function() {
		       		if (chrome.runtime.lastError) {
		           	console.log(chrome.runtime.lastError.message);
		       		}
		    	});    		 
			}
		});
	});
});

$(function(){
    $('#unlock_all').click(function(){
		chrome.tabs.query({}, function(tabs){
	  		for (var i = 0; i < tabs.length; i++) {
				chrome.tabs.executeScript(tabs[i].id, 
				{ 
				file: 'js/unlock.js' 
		        }, function() {
		       		if (chrome.runtime.lastError) {
		           	console.log(chrome.runtime.lastError.message);
		       		}
		    	});    		 
			}
		});
	});
});


$(function(){
        $('#unlock_this').click(function(){
			chrome.tabs.executeScript({
	   		file: 'js/unlock.js'
	   		});
		});
});

$(function(){
        $('#lock_this').click(function(){
			chrome.tabs.executeScript({
	   		file: 'js/lock.js'
	   		});
		});
});



