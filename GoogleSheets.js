window.addEventListener("load", function()
{
  document.getElementById("getSheet_btn").addEventListener("click", function (){ 
	try{
		var text = document.getElementById("getSheet_txt").value;
		chrome.storage.sync.set({'link' : text}, function(){});
		var begin = text.indexOf("d/") + 2;
		var end = text.indexOf("/edit");
		var sheet_text = "";
		var spreadsheetId = text.substring(begin,end), 
		url = "https://spreadsheets.google.com/feeds/list/" +
		spreadsheetId +
		"/od6/public/basic?alt=json";
		$.get({
		  url: url, 
		  success: function(response) {
			var data = response.feed.entry,
			  len = data.length,
			  i = 0,
			  parsedData = [];
			
			for (i = 0; i < len; i++) {
			  //document.getElementById("chart_res").innerHTML += data[i].title.$t + ", " + data[i].content.$t + "<br>";
			  sheet_text += data[i].title.$t + "," + data[i].content.$t.replace("explanation:", "") + "\n";
			  //console.log(data[i].title.$t + ", " + data[i].content.$t);
			}
			chrome.storage.sync.set({'list' : sheet_text}, function(){
				document.getElementById("chart_res").innerHTML = "Changed the list";
				console.log(sheet_text);///////////////////////////////////////////////////
			});
		  }
		  
		});
		var now = new Date();
		chrome.storage.sync.set({'lastUpdate' : now.getTime()}, function(){
			  });
		
		
	}catch(err){
		console.log(err)
		document.getElementById("chart_res").innerHTML = "ERROR Reading the file from the Google Sheet";
	}
  }, false);
	
 }, false);
 
 window.addEventListener("load", function()
{
  document.getElementById("update_btn").addEventListener("click", function (){ 
	chrome.storage.sync.get('link', function(data){
		try{
			var text = data.link;
			var begin = text.indexOf("d/") + 2;
			var end = text.indexOf("/edit");
			var sheet_text = "";
			var spreadsheetId = text.substring(begin,end), 
			url = "https://spreadsheets.google.com/feeds/list/" +
			spreadsheetId +
			"/od6/public/basic?alt=json";
			$.get({
			  url: url, 
			  success: function(response) {
				var data = response.feed.entry,
				  len = data.length,
				  i = 0,
				  parsedData = [];
				
				for (i = 0; i < len; i++) {
				  //document.getElementById("chart_res").innerHTML += data[i].title.$t + ", " + data[i].content.$t + "<br>";
				  sheet_text += data[i].title.$t + "," + data[i].content.$t.replace("explanation:", "") + "\n";
				  //console.log(data[i].title.$t + ", " + data[i].content.$t);
				}
				chrome.storage.sync.set({'list' : sheet_text}, function(){
					document.getElementById("chart_res").innerHTML = "Updated the list";
					//console.log(sheet_text);///////////////////////////////////////////////////
				});
			  }
			  
			});
			var now = new Date();
			chrome.storage.sync.set({'lastUpdate' : now.getTime()}, function(){});
			
			
		}catch(err){
			console.log(err);
			document.getElementById("chart_res").innerHTML = "ERROR Reading the file from the Google Sheet";
		}
	});
		
		
  }, false);
	
 }, false);
 
  window.addEventListener("load", function()
{
  document.getElementById("getLink_btn").addEventListener("click", function (){ 
	chrome.storage.sync.get('link', function(data){
		document.getElementById("link_res").href = data.link;
		document.getElementById("link_res").text = data.link;
       /* var newURL = data.link;
        chrome.tabs.create({ url: newURL });
		*/
	});
  }, false);
	
 }, false);

