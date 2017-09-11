chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
          "from a content script:" + sender.tab.url :
          "from the extension");
        
        if (request.lock == "yes_key"){
        	chrome.tabs.executeScript({
	   		file: 'js/lock.js'
	   		});
            sendResponse({farewell: "Lock JS KEY LISTENER"});
        }

        if (request.lock == "yes"){
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
			sendResponse({farewell: "Lock BY TIMER"});
		}
    }
);



