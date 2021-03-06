(function(){

	// the minimum version of jQuery we want
	var v = "1.7.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
			
			// fix prefixes
			$('#sliderTitle option').each(function(index, value){
				$(this).text($(this).text().replace('Song - ', ''));
				$(this).text($(this).text().replace('Lyrics - ', ''));
			});

			// sort alphabetically
			$("#sliderTitle").html($("#sliderTitle option").sort(function (a, b) {
			    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
			}));

			// alert
			alert('List of panels has been sorted alphabetically.');
		})();
	}

})();