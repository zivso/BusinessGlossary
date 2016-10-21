window.addEventListener("load", function()
{
  document.getElementById("getOrigin_btn")
          .addEventListener("click", getOrigin, false);
}, false);

function getOrigin(){
	chrome.storage.sync.set({'enable' : 'false'}, function(){
		chrome.storage.sync.get('prev_page', function(data){
			console.log(data.prev_page);
		});});
	

}

