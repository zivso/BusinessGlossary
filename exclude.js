var list = [];
chrome.storage.sync.get('exclude_URLs', function(data){
	console.log(data.exclude_URLs);
		 list = data.exclude_URLs.split(",");
		console.log(list);
		//adding the urls and the checkboxs
for (var i = 0; i < list.length; i++){
	if(list[i] != ""){
		var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.id = "cb_" + i;
	checkbox.checked = true;

	var label = document.createElement('label')
	label.htmlFor = "cb_" + i;
	label.appendChild(document.createElement("br"));
	label.appendChild(document.createTextNode(list[i]));
	//label.appendChild(checkbox);
	
	
	document.getElementById("cb").appendChild(label);
	document.getElementById("cb").appendChild(checkbox);
	
	}
	
}
/*
//adding apply button
var apply_btn = document.createElement('input');
apply_btn.type = "button";
apply_btn.id = "apply_btn"
apply_btn.value = "save";
document.getElementById("cb").appendChild(apply_btn);

//adding the button listener

var apply_lis = document.createElement('script');
apply_lis.type = "text/javascript";
apply_lis.src = "saveExcludeURLs.js";
document.getElementById("cb").appendChild(apply_lis);
*/
	});

