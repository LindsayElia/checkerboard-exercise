var colorNum1 = 80;
var colorNum2 = 80;

for (var i = 0; i < 81; i++){
	var newDiv = document.createElement("div");	
	document.body.appendChild(newDiv);		
	newDiv.style.width = "11.1%";
	newDiv.style.float = "left";
	newDiv.style.padding = "0 0 11.1% 0";
	
	if (i%2 === 0){
		
		// add 2 to 80
		var newColor1 = function(str){
			
			for(var j = 0; j < 9; j++){
				colorNum1 = colorNum1 + 2;
				return colorNum1.toString();
			}
		};
		
		var colorStr1 = newColor1();
		
		newDiv.style.background = "rgb(120,66," + colorStr1 + ")";
		
	}
	
	else {
		
		// add 2 to 80
		var newColor2 = function(str){
			
			for(var j = 0; j < 9; j++){
				colorNum2 = colorNum2 + 2;
				return colorNum2.toString();
			}
		};
		
		var colorStr2 = newColor2();
		
		newDiv.style.background = "rgb(120,3," + colorStr2 + ")";

	}
	
}