function readSingleFile(evt) {
		//Retrieve the first (and only!) File from the FileList object
		var f = evt.target.files[0]; 
		
		if (f) {
		  var r = new FileReader();
		  r.onload = function(e) { 
			  var contents = e.target.result;
			  var array = contents.split("\n")
			  var text = ""
			  for (var i = 0; i < array.length; i++){
				array[i] = array[i].split(",");
				text += array[i][0] + 	"," + array[i][1];
				text += "\n"
			  }
			  console.log(text);//////////////////////////////
			  chrome.storage.sync.set({'list' : text}, function(){
				  document.getElementById("file_res").innerHTML = "Changed the current dictionary";
			});
		  }
		  r.readAsText(f);
		} else { 
		  document.getElementById("file_res").innerHTML = "Failed to load the file";
		}
		
	  }
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
