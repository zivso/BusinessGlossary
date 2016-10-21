window.addEventListener("load", function()
{
  document.getElementById("apply_btn")
          .addEventListener("click", apply, false);
}, false);

function apply(){
	if(document.getElementById("case_cb").checked === true){
		chrome.storage.sync.set({'caseSensitive' : true}, function(){});
	}else{
		chrome.storage.sync.set({'caseSensitive' : false}, function(){});
	}
	
	if(document.getElementById("first_cb").checked === true){
		chrome.storage.sync.set({'firstInPage' : true}, function(){});
	}else{
		chrome.storage.sync.set({'firstInPage' : false}, function(){});
	}
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});

}
