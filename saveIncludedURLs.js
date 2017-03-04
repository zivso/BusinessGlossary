window.addEventListener("load", function()
{
  document.getElementById("addUrl_btn")
          .addEventListener("click", addURL, false);
}, false);

window.addEventListener("load", function()
{
  document.getElementById("apply_btn")
          .addEventListener("click", save, false);
}, false);

function save(){
	var final_URL_txt = "";
	var list = document.getElementsByTagName('input');
	var urls = document.getElementsByTagName('label');
	for(var i = 2; i < list.length -1; i++){
		if(list[i].checked == true){
			var cur_url = "";
			//removing the </br> from the url text
			cur_url = urls[i-2].innerHTML.substr(4);
			final_URL_txt += cur_url;
			if(i != list.length -2){
				final_URL_txt +=  ", ";
			}
		}
	}
	var list = final_URL_txt.split(",").sort();
	final_URL_txt = list.join(", ");
	//saving the final urls
	console.log(final_URL_txt);
	chrome.storage.sync.set({'included_URLs' : final_URL_txt}, function(){
		console.log("saved your included url list");
	});
	location.reload();
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
	
}

function addURL(){
	var url = document.getElementById("URL_txt").value;
	chrome.storage.sync.get('included_URLs', function(data){
		var text = "";
		if(data.included_URLs != null && data.included_URLs.length > 0){
			text = data.included_URLs;
			text += ", ";
		}
		
		text += url;
		console.log(text);
		chrome.storage.sync.set({'included_URLs' : text}, function(){});
		
	});
	location.reload();
	chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
}