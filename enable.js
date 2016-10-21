chrome.storage.sync.get('enable', function(data){
			if(data.enable === "false"){
				document.getElementById("enable_btn").checked = false;
				document.body.style.backgroundColor = "grey";
			}else{
				document.getElementById("enable_btn").checked = true;
			}
	});

window.addEventListener("load", function()
{
  document.getElementById("enable_btn")
          .addEventListener("click", enable, false);
}, false);

function enable(){
	var enableValue = "";
	chrome.storage.sync.get('enable', function(data){
		console.log(data.enable);
			if(data.enable === "false"){
				chrome.storage.sync.set({'enable' : 'true'}, function(){
			});
				//document.getElementById("enable_res").innerHTML = "enabled";
				document.body.style.backgroundColor = "white";
			}else if(data.enable === "true"){
				 chrome.storage.sync.set({'enable' : 'false'}, function(){
			  });
				 //document.getElementById("enable_res").innerHTML = "disabled";
				 document.body.style.backgroundColor = "grey";
				 
			}else{
				chrome.storage.sync.set({'enable' : 'false'}, function(){
			  });
				 document.getElementById("enable_res").innerHTML = "disabled";
			     //document.getElementById("enable_btn").value = "enable";
				//document.getElementById("enable_res").innerHTML = "There is a problem in the enable data";
				console.log(data.enable);
				
			}
	});


}
