showOptions();
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
	
	if(document.getElementById("include_exclude_cb").checked === true){
		chrome.storage.sync.set({'include_choice' : true}, function(){});
	}else{
		chrome.storage.sync.set({'include_choice' : false}, function(){});
	}
	//refreshing the pageX
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
}

function showOptions(){
	chrome.storage.sync.get('caseSensitive', function(data){
		if(data.caseSensitive != null && data.caseSensitive === true){
			document.getElementById("case_cb").checked = true;
		}
	});
	
	chrome.storage.sync.get('firstInPage', function(data){
		if(data.firstInPage != null && data.firstInPage === true){
			document.getElementById("first_cb").checked = true;
		}
	});
	
	chrome.storage.sync.get('include_choice', function(data){
	if(data.include_choice != null && data.include_choice === true){
		document.getElementById("include_exclude_cb").checked = true;
	}
	});
	
}
