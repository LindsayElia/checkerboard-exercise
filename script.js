window.onload = changeColors;

// document.addEventListener("pageshow", changeColors);

function changeColors(){
	intervId = setInterval(randomColors, 2000);
};

function randomColors(){
	for (var i = 0; i < 81; i++){
		var newDiv = document.createElement("div");	
		document.body.appendChild(newDiv);		
		newDiv.style.width = "11.1%";
		newDiv.style.borderRadius = "50%";		// turns the squares into circles
		newDiv.style.float = "left";
		newDiv.style.padding = "0 0 11.1% 0";
		newDiv.style.background = "#" + Math.floor(Math.random()*16777215).toString(16); 	
	}
		// randomColors(setTimeout(randomColors, 2000));
};


function intervalFlashing (){
	for (var t = 0; t < 100; t++){
		setTimeout(randomColors(), 2000);
		document.addEventListener("DOMContentLoaded", randomColors);
	 	intervalFlashing();
	}
};


