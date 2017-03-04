var list = [];
chrome.storage.sync.get('included_URLs', function(data){
	if(typeof data.included_URLs != "undefined"){
			console.log(data.included_URLs);
		 list = data.included_URLs.split(",");
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
	}
});