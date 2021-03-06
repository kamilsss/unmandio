//$.getScript("js/mqttws31.js", function(){
//   alert("Script loaded but not necessarily executed.");
//});

function drawImage(imgData, coords) {
	"use strict";
	var canvasImage = document.getElementById("thecanvas");
	var ctx = canvasImage.getContext("2d");

	// var uInt8Array = new Uint8Array(imgData);
	var uInt8Array = imgData;
	var i = uInt8Array.length;
	var binaryString = [ i ];
	while (i--) {
		binaryString[i] = String.fromCharCode(uInt8Array[i]);
	}
	var data = binaryString.join('');

	var base64 = window.btoa(data);

	var img = new Image();
	img.src = "data:image/png;base64," + base64;
	img.onload = function() {
		console.log("Image Onload");
		ctx.drawImage(img, coords[0], coords[1], canvasImage.width,
				canvasImage.height);
//		return img;
	};
	img.onerror = function(stuff) {
		console.log("Image error:", stuff);
	};

}

function endsWith(str, suffix) {
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
